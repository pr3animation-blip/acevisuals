#!/usr/bin/env bash
#
# compress-videos.sh — batch-convert videos in public/ to web-friendly MP4s.
#
# Behaviour:
#   - Originals moved to _video-originals/<same relative path> (gitignored)
#   - Compressed H.264 MP4s written back to public/<same path>/<name>.mp4
#   - Non-web formats (.mov/.avi/.mkv/.m4v) are always re-encoded
#   - Existing .mp4/.webm files are only re-encoded if larger than MIN_MB (default 20)
#
# Usage:
#   bash scripts/compress-videos.sh                    # do it (standard preset)
#   bash scripts/compress-videos.sh --dry              # preview only (no ffmpeg needed)
#   bash scripts/compress-videos.sh --bg engine-loop   # treat matching file(s) as bg loops (muted, higher crf)
#   bash scripts/compress-videos.sh --min-mb 10        # re-encode mp4s larger than 10MB (default 20)
#   bash scripts/compress-videos.sh --crf 26           # standard quality (default 24; higher = smaller/worse)
#   bash scripts/compress-videos.sh --crf-bg 30        # bg loop quality (default 28)
#   bash scripts/compress-videos.sh --max-width 1280   # downscale above this width (default 1920)
#
# Tips:
#   - crf 20–22: archival quality, big files
#   - crf 23–25: standard web (sweet spot for portfolio pieces)
#   - crf 26–30: aggressive (good for bg loops or fallback)
#
# Requires: ffmpeg on PATH, or ffmpeg-static installed (npm i -D ffmpeg-static)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$REPO_ROOT/public"
ORIGINALS_DIR="$REPO_ROOT/_video-originals"

DRY=0
MIN_MB=20
CRF_STANDARD=24
CRF_BG=28
MAX_WIDTH=1920
BG_PATTERNS=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry|--dry-run) DRY=1; shift ;;
    --min-mb) MIN_MB="$2"; shift 2 ;;
    --crf) CRF_STANDARD="$2"; shift 2 ;;
    --crf-bg) CRF_BG="$2"; shift 2 ;;
    --max-width) MAX_WIDTH="$2"; shift 2 ;;
    --bg) BG_PATTERNS+=("$2"); shift 2 ;;
    -h|--help) sed -n '2,25p' "$0"; exit 0 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

# --- locate ffmpeg (skipped for --dry) ---------------------------------------
FFMPEG=""
if command -v ffmpeg >/dev/null 2>&1; then
  FFMPEG="ffmpeg"
elif [[ -x "$REPO_ROOT/node_modules/ffmpeg-static/ffmpeg" ]]; then
  FFMPEG="$REPO_ROOT/node_modules/ffmpeg-static/ffmpeg"
elif (( DRY == 0 )); then
  cat >&2 <<'MSG'
ffmpeg not found. Install one of:

  1) Homebrew (recommended on mac):
       /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
       brew install ffmpeg

  2) npm (no admin perms required, binary lives under node_modules/):
       npm install --save-dev ffmpeg-static

Then re-run this script. (You can use --dry without ffmpeg to preview.)
MSG
  exit 1
fi

# --- helpers -----------------------------------------------------------------
bytes()  { stat -f%z "$1" 2>/dev/null || stat -c%s "$1"; }
hsize()  { du -h "$1" 2>/dev/null | cut -f1; }
is_bg()  { local f="$1"; for p in "${BG_PATTERNS[@]:-}"; do [[ -n "$p" && "$f" == *"$p"* ]] && return 0; done; return 1; }

needs_reencode() {
  local src="$1"
  local e; e=$(echo "${src##*.}" | tr '[:upper:]' '[:lower:]')
  case "$e" in
    mov|avi|mkv|m4v) return 0 ;;
    mp4|webm)
      local size_mb=$(( $(bytes "$src") / 1024 / 1024 ))
      (( size_mb > MIN_MB )) && return 0 || return 1
      ;;
    *) return 1 ;;
  esac
}

# --- main --------------------------------------------------------------------
mkdir -p "$ORIGINALS_DIR"

TOTAL_BEFORE=0
TOTAL_AFTER=0
PROCESSED=0
SKIPPED=0

printf "\nScanning %s (min-mb=%s, dry=%s)\n" "$PUBLIC_DIR" "$MIN_MB" "$DRY"
printf '─%.0s' {1..72}; echo

while IFS= read -r -d '' src; do
  rel="${src#$PUBLIC_DIR/}"
  dir_rel="$(dirname "$rel")"
  base="$(basename "$rel")"
  stem="${base%.*}"

  orig_dest="$ORIGINALS_DIR/$dir_rel/$base"
  out="$PUBLIC_DIR/$dir_rel/$stem.mp4"

  # already processed on a prior run?
  if [[ -f "$orig_dest" && -f "$out" && "$out" != "$src" ]]; then
    echo "  ✓ skip (already done): $rel"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  if ! needs_reencode "$src"; then
    echo "  ✓ skip (ok as-is):     $rel  ($(hsize "$src"))"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  size_before=$(bytes "$src")
  TOTAL_BEFORE=$((TOTAL_BEFORE + size_before))

  if is_bg "$base"; then
    crf="$CRF_BG"; audio_args=(-an); preset_label="bg/loop"
  else
    crf="$CRF_STANDARD"; audio_args=(-c:a aac -b:a 128k); preset_label="standard"
  fi

  echo ""
  echo "▶ $rel  ($(hsize "$src"))  [$preset_label, crf=$crf]"

  if (( DRY )); then
    echo "   → would move to: ${orig_dest#$REPO_ROOT/}"
    echo "   → would encode to: ${out#$REPO_ROOT/}"
    continue
  fi

  mkdir -p "$(dirname "$orig_dest")"
  mv "$src" "$orig_dest"

  tmp_out="$out.tmp.$$.mp4"
  if ! "$FFMPEG" -y -hide_banner -loglevel error -stats \
       -i "$orig_dest" \
       -vf "scale='min($MAX_WIDTH,iw)':-2" \
       -c:v libx264 -preset slow -crf "$crf" \
       -pix_fmt yuv420p -movflags +faststart \
       "${audio_args[@]}" \
       "$tmp_out"; then
    echo "   ✗ ffmpeg failed — original preserved at $orig_dest" >&2
    rm -f "$tmp_out"
    continue
  fi

  mv "$tmp_out" "$out"
  size_after=$(bytes "$out")
  TOTAL_AFTER=$((TOTAL_AFTER + size_after))
  PROCESSED=$((PROCESSED + 1))
  pct=$(( (size_before - size_after) * 100 / size_before ))
  echo "   ✓ $(hsize "$out")  (−${pct}%)"

done < <(find "$PUBLIC_DIR" -type f \( \
    -iname "*.mov" -o -iname "*.mp4" -o -iname "*.webm" \
    -o -iname "*.avi" -o -iname "*.mkv" -o -iname "*.m4v" \
  \) -print0 | sort -z)

echo ""
printf '─%.0s' {1..72}; echo
if (( DRY )); then
  echo "Dry run complete. Nothing was changed."
else
  mb_before=$((TOTAL_BEFORE / 1024 / 1024))
  mb_after=$((TOTAL_AFTER / 1024 / 1024))
  echo "Processed: $PROCESSED   Skipped: $SKIPPED"
  echo "Size: ${mb_before} MB → ${mb_after} MB"
  echo "Originals: $ORIGINALS_DIR"
fi
