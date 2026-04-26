#!/usr/bin/env bash
#
# compress-images.sh — batch-convert PNG/JPG in public/ to WebP.
#
# Behaviour:
#   - Originals moved to _image-originals/<same relative path> (gitignored)
#   - WebPs written back to public/<same path>/<name>.avif
#   - Images wider than --max-width are resized down (preserves aspect ratio)
#   - Skips files already smaller than --min-kb (default 200)
#
# Usage:
#   bash scripts/compress-images.sh                  # do it (default settings)
#   bash scripts/compress-images.sh --dry            # preview only
#   bash scripts/compress-images.sh --max-width 1920 # cap width at 1920
#   bash scripts/compress-images.sh --quality 80     # avif quality (default 85)
#   bash scripts/compress-images.sh --min-kb 100     # only re-encode files >100KB
#
# Requires: sips (built-in on macOS)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$REPO_ROOT/public"
ORIGINALS_DIR="$REPO_ROOT/_image-originals"
TARGET=""

DRY=0
MAX_WIDTH=2400
QUALITY=85
MIN_KB=200

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry|--dry-run) DRY=1; shift ;;
    --max-width) MAX_WIDTH="$2"; shift 2 ;;
    --quality) QUALITY="$2"; shift 2 ;;
    --min-kb) MIN_KB="$2"; shift 2 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) TARGET="$1"; shift ;;
  esac
done

SCAN_DIR="${TARGET:-$PUBLIC_DIR}"
SCAN_DIR="$(cd "$SCAN_DIR" 2>/dev/null && pwd)" || { echo "Not a directory: ${TARGET:-$PUBLIC_DIR}" >&2; exit 1; }

if ! command -v sips >/dev/null 2>&1; then
  echo "sips not found (macOS built-in). On Linux, install cavif via libavif." >&2
  exit 1
fi

bytes() { stat -f%z "$1" 2>/dev/null || stat -c%s "$1"; }
hsize() { du -h "$1" 2>/dev/null | cut -f1; }

mkdir -p "$ORIGINALS_DIR"

TOTAL_BEFORE=0
TOTAL_AFTER=0
PROCESSED=0
SKIPPED=0

printf "\nScanning %s (max-width=%s, quality=%s, dry=%s)\n" "$SCAN_DIR" "$MAX_WIDTH" "$QUALITY" "$DRY"
printf '─%.0s' {1..72}; echo

while IFS= read -r -d '' src; do
  rel="${src#$PUBLIC_DIR/}"
  dir_rel="$(dirname "$rel")"
  base="$(basename "$rel")"
  stem="${base%.*}"

  orig_dest="$ORIGINALS_DIR/$dir_rel/$base"
  out="$PUBLIC_DIR/$dir_rel/$stem.avif"

  if [[ -f "$orig_dest" && -f "$out" ]]; then
    echo "  ✓ skip (already done): $rel"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  size_kb=$(( $(bytes "$src") / 1024 ))
  if (( size_kb < MIN_KB )); then
    echo "  ✓ skip (small):       $rel  ($(hsize "$src"))"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  width=$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/ {print $2}')
  size_before=$(bytes "$src")
  TOTAL_BEFORE=$((TOTAL_BEFORE + size_before))

  resize_args=()
  if [[ -n "$width" && "$width" -gt "$MAX_WIDTH" ]]; then
    resize_args=(--resampleWidth "$MAX_WIDTH")
    resize_label=" → ${MAX_WIDTH}w"
  else
    resize_label=""
  fi

  echo ""
  echo "▶ $rel  ($(hsize "$src"), ${width}px)$resize_label"

  if (( DRY )); then
    echo "   → would move to: ${orig_dest#$REPO_ROOT/}"
    echo "   → would encode:  ${out#$REPO_ROOT/}"
    continue
  fi

  mkdir -p "$(dirname "$orig_dest")"
  cp "$src" "$orig_dest"

  if ! sips -s format avif -s formatOptions "$QUALITY" ${resize_args[@]+"${resize_args[@]}"} \
       "$src" --out "$out" >/dev/null 2>&1; then
    echo "   ✗ sips failed — original preserved at $orig_dest" >&2
    continue
  fi

  rm "$src"
  size_after=$(bytes "$out")
  TOTAL_AFTER=$((TOTAL_AFTER + size_after))
  PROCESSED=$((PROCESSED + 1))
  pct=$(( (size_before - size_after) * 100 / size_before ))
  echo "   ✓ $(hsize "$out")  (−${pct}%)"

done < <(find "$SCAN_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | sort -z)

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
