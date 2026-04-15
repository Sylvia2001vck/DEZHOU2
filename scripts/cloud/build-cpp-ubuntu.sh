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

echo "[2/3] CMake configure + build Release..."
cmake -S backend-cpp -B build-cpp -DCMAKE_BUILD_TYPE=Release
cmake --build build-cpp -j"$(nproc)"

BIN="$ROOT/build-cpp/nebula-poker-server"
if [[ ! -x "$BIN" ]]; then
  echo "Expected binary not found: $BIN" >&2
  exit 1
fi
echo "[3/3] OK: $BIN"
ls -la "$BIN"
