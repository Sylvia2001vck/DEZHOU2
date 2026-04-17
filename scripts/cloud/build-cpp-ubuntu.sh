#!/usr/bin/env bash
# Build Nebula C++ room worker (Boost.Asio gateway + game logic) on Ubuntu 22.04/24.04.
# Run from repository root: bash scripts/cloud/build-cpp-ubuntu.sh
#
# Low-RAM VM: optional swap → scripts/cloud/add-swap-2g-ubuntu.sh
# SSH-safe background: scripts/cloud/build-cpp-ubuntu-nohup.sh  (see backend-cpp/README.md)

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

# 2 核小实例编译 poker.pb.cc / main.cpp 极易打满 CPU+内存，SSH/Cursor 会假死。默认 -j1（等价 make -j1），最稳。
# 核多再上：NEBULA_BUILD_JOBS=2 bash scripts/cloud/build-cpp-ubuntu.sh
: "${NEBULA_BUILD_JOBS:=1}"
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
