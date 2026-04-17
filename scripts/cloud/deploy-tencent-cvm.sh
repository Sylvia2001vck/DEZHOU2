#!/usr/bin/env bash
# Build C++ room worker + Java gateway on Ubuntu (Tencent CVM or any 22.04/24.04).
# Run from repository root:  bash scripts/cloud/deploy-tencent-cvm.sh
#
# After build, install systemd units (edit paths/user inside the .service files first):
#   sudo cp scripts/cloud/nebula-poker-cpp.service /etc/systemd/system/
#   sudo cp scripts/cloud/nebula-gateway-java.service /etc/systemd/system/
#   sudo systemctl daemon-reload
#   sudo systemctl enable --now nebula-poker-cpp
#   sudo systemctl enable --now nebula-gateway-java
#
# Security group: open TCP 22 (SSH) and PORT (default 3000) or 80/443 behind Nginx.
# Do NOT expose NEBULA_ROOM_WORKER_PORT (3101) — C++ listens on 127.0.0.1 only.

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

: "${NEBULA_BUILD_JOBS:=$(nproc)}"

echo "[1/3] C++ Release build..."
cmake -S backend-cpp -B build-cpp -DCMAKE_BUILD_TYPE=Release
cmake --build build-cpp -j"${NEBULA_BUILD_JOBS}"

echo "[2/3] Java gateway package..."
mvn -f backend-java/pom.xml -q -DskipTests package

CPP_BIN="$ROOT/build-cpp/nebula-poker-server"
JAR="$ROOT/backend-java/target/nebula-gateway.jar"
if [[ ! -x "$CPP_BIN" ]]; then
  echo "Missing binary: $CPP_BIN" >&2
  exit 1
fi
if [[ ! -f "$JAR" ]]; then
  echo "Missing jar: $JAR" >&2
  exit 1
fi

echo "[3/3] OK"
ls -la "$CPP_BIN" "$JAR"
echo ""
echo "Manual run (same machine):"
echo "  terminal A:  NEBULA_REPO_ROOT=\"$ROOT\" $CPP_BIN"
echo "  terminal B:  NEBULA_REPO_ROOT=\"$ROOT\" PORT=3000 java -jar \"$JAR\""
echo ""
echo "Or use systemd units under scripts/cloud/ (edit User + paths to match this server)."
