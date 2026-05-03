#!/usr/bin/env bash
#
# transcode-for-upload.sh — re-encode source videos to web-friendly MP4s
# for uploading to UploadThing (or any CDN).
#
# Use case:
#   The reels on the work page (lib/work-videos.ts) currently point at
#   raw camera/render exports — .mov files of 130–670 MB. Browsers can't
#   decode 6+ of those in parallel, so playback chokes. This script
#   re-encodes them to ~1080p H.264 with +faststart so they load and
#   play in parallel. Drop the optimized files into UploadThing, then
#   swap the `src` URLs in lib/work-videos.ts.
#
# Behaviour:
#   - Reads every .mov/.mp4/.webm/.avi/.mkv/.m4v in --in
#   - Writes <stem>.mp4 to --out (creates the dir if missing)
#   - Originals are NOT touched
#   - Skips a file if the destination already exists (re-run friendly)
#
# Usage:
#   bash scripts/transcode-for-upload.sh \
#     --in  ~/Downloads/reel-source \
#     --out ~/Downloads/reel-web
#
#   bash scripts/transcode-for-upload.sh --in ~/Downloads/reel-source --out ~/Downloads/reel-web --crf 22
#   bash scripts/transcode-for-upload.sh --in ~/Downloads/reel-source --out ~/Downloads/reel-web --max-width 1280
#   bash scripts/transcode-for-upload.sh --in ~/Downloads/reel-source --out ~/Downloads/reel-web --no-audio
#
# Tuning (defaults are tuned for the work-page reels — 1280px wide, crf 25):
#   --crf 20–22  archival, larger files
#   --crf 23–25  standard web (default 25, sweet spot for tile playback)
#   --crf 26–30  aggressive — small files, soft on detail
#   --max-width  cap output width in px (default 1280, plenty for the tile grid)
#
# Requires: ffmpeg on PATH (`brew install ffmpeg`) or ffmpeg-static in node_modules.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

IN_DIR=""
OUT_DIR=""
CRF=25
MAX_WIDTH=1280
KEEP_AUDIO=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --in)         IN_DIR="$2"; shift 2 ;;
    --out)        OUT_DIR="$2"; shift 2 ;;
    --crf)        CRF="$2"; shift 2 ;;
    --max-width)  MAX_WIDTH="$2"; shift 2 ;;
    --no-audio)   KEEP_AUDIO=0; shift ;;
    -h|--help)    sed -n '2,40p' "$0"; exit 0 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

if [[ -z "$IN_DIR" || -z "$OUT_DIR" ]]; then
  echo "Usage: $0 --in <dir> --out <dir> [--crf 24] [--max-width 1920] [--no-audio]" >&2
  exit 1
fi

if [[ ! -d "$IN_DIR" ]]; then
  echo "Input dir not found: $IN_DIR" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

# --- locate ffmpeg -----------------------------------------------------------
FFMPEG=""
if command -v ffmpeg >/dev/null 2>&1; then
  FFMPEG="ffmpeg"
elif [[ -x "$REPO_ROOT/node_modules/ffmpeg-static/ffmpeg" ]]; then
  FFMPEG="$REPO_ROOT/node_modules/ffmpeg-static/ffmpeg"
else
  cat >&2 <<'MSG'
ffmpeg not found. Install one of:

  1) Homebrew (recommended on mac):
       brew install ffmpeg

  2) npm (no admin perms required, binary lives under node_modules/):
       npm install --save-dev ffmpeg-static

Then re-run this script.
MSG
  exit 1
fi

# --- helpers -----------------------------------------------------------------
bytes() { stat -f%z "$1" 2>/dev/null || stat -c%s "$1"; }
hsize() { du -h "$1" 2>/dev/null | cut -f1; }

if (( KEEP_AUDIO )); then
  AUDIO_ARGS=(-c:a aac -b:a 128k)
else
  AUDIO_ARGS=(-an)
fi

# --- main --------------------------------------------------------------------
TOTAL_BEFORE=0
TOTAL_AFTER=0
PROCESSED=0
SKIPPED=0

printf "\nTranscoding %s → %s  (crf=%s, max-width=%s, audio=%s)\n" \
  "$IN_DIR" "$OUT_DIR" "$CRF" "$MAX_WIDTH" "$( ((KEEP_AUDIO)) && echo on || echo off )"
printf '─%.0s' {1..72}; echo

while IFS= read -r -d '' src; do
  base="$(basename "$src")"
  stem="${base%.*}"
  out="$OUT_DIR/$stem.mp4"

  if [[ -f "$out" ]]; then
    echo "  ✓ skip (exists): $base"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  size_before=$(bytes "$src")
  TOTAL_BEFORE=$((TOTAL_BEFORE + size_before))

  echo ""
  echo "▶ $base  ($(hsize "$src"))"

  tmp_out="$out.tmp.$$.mp4"
  if ! "$FFMPEG" -y -hide_banner -loglevel error -stats \
       -i "$src" \
       -vf "scale='min($MAX_WIDTH,iw)':-2" \
       -c:v libx264 -preset slow -crf "$CRF" \
       -pix_fmt yuv420p -movflags +faststart \
       "${AUDIO_ARGS[@]}" \
       "$tmp_out"; then
    echo "   ✗ ffmpeg failed" >&2
    rm -f "$tmp_out"
    continue
  fi

  mv "$tmp_out" "$out"
  size_after=$(bytes "$out")
  TOTAL_AFTER=$((TOTAL_AFTER + size_after))
  PROCESSED=$((PROCESSED + 1))
  pct=$(( (size_before - size_after) * 100 / size_before ))
  echo "   ✓ $(hsize "$out")  (−${pct}%)"

done < <(find "$IN_DIR" -maxdepth 1 -type f \( \
    -iname "*.mov" -o -iname "*.mp4" -o -iname "*.webm" \
    -o -iname "*.avi" -o -iname "*.mkv" -o -iname "*.m4v" \
  \) -print0 | sort -z)

echo ""
printf '─%.0s' {1..72}; echo
mb_before=$((TOTAL_BEFORE / 1024 / 1024))
mb_after=$((TOTAL_AFTER / 1024 / 1024))
echo "Processed: $PROCESSED   Skipped: $SKIPPED"
if (( PROCESSED > 0 )); then
  echo "Size: ${mb_before} MB → ${mb_after} MB"
fi
echo "Output: $OUT_DIR"
