#!/usr/bin/env bash
# Copy everything the browser needs for index.html (type=module) under frontend/static/.
# Run from repo root:  bash scripts/cloud/sync-frontend-static.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
DST="$ROOT/frontend/static"
mkdir -p "$DST/frontend/src/utils"
cp -f "$ROOT/index.html" "$DST/index.html"
cp -f "$ROOT/proto-socket.js" "$DST/proto-socket.js"
cp -f "$ROOT/frontend/src/utils/SyncManager.js" "$DST/frontend/src/utils/SyncManager.js"
if [[ -d "$ROOT/assets" ]]; then
  cp -a "$ROOT/assets" "$DST/"
else
  mkdir -p "$DST/assets"
  echo "[sync-frontend-static] note: no assets/ at repo root (optional ifcan.mp3 etc.)"
fi
# Browser loads protobuf schema from same origin (see proto-socket.js protoUrl).
mkdir -p "$DST/proto"
cp -f "$ROOT/backend-cpp/proto/poker.proto" "$DST/proto/poker.proto"
echo "OK → $DST"
ls -la "$DST" | head -20
