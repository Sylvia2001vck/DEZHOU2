#!/usr/bin/env bash
# Run build-cpp-ubuntu.sh in background so SSH drops do not stop the compile.
# Usage (from repo root): bash scripts/cloud/build-cpp-ubuntu-nohup.sh
# Watch: tail -f build-cpp.log

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"
LOG="${NEBULA_BUILD_LOG:-$ROOT/build-cpp.log}"
nohup bash scripts/cloud/build-cpp-ubuntu.sh >"$LOG" 2>&1 &
echo "Build started in background, PID $!"
echo "Log file: $LOG"
echo "Watch: tail -f $LOG"
