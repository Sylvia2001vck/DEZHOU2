#!/usr/bin/env bash
# Build Nebula C++ (Boost.Beast) backend on Ubuntu 22.04/24.04.
# Run from repository root: bash scripts/cloud/build-cpp-ubuntu.sh

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

echo "[1/3] Installing packages (needs sudo)..."
sudo apt-get update -qq
sudo apt-get install -y \
  build-essential \
  cmake \
  pkg-config \
  libboost-dev \
  libboost-system-dev \
  libboost-thread-dev \
  protobuf-compiler \
  libprotobuf-dev \
  default-libmysqlclient-dev \
  libhiredis-dev

# Small云主机不要用满核编译，否则 g++/cc1plus 会吃光 CPU/内存，SSH 也会卡死。默认 -j2，可用 NEBULA_BUILD_JOBS 覆盖。
: "${NEBULA_BUILD_JOBS:=2}"
echo "[2/3] CMake configure + build Release (parallel jobs=${NEBULA_BUILD_JOBS})..."
cmake -S backend-cpp -B build-cpp -DCMAKE_BUILD_TYPE=Release
cmake --build build-cpp -j"${NEBULA_BUILD_JOBS}"

BIN="$ROOT/build-cpp/nebula-poker-server"
if [[ ! -x "$BIN" ]]; then
  echo "Expected binary not found: $BIN" >&2
  exit 1
fi
echo "[3/3] OK: $BIN"
ls -la "$BIN"
