#!/usr/bin/env bash
# 在 CVM 上：拉最新 main 并重建/重启 Docker（compose 目录内需已有 .env）。
# 用法：bash pull-and-up.sh
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$SCRIPT_DIR"

if [[ ! -f .env ]]; then
  echo "Missing .env — copy env.example to .env first." >&2
  exit 1
fi

git -C "$REPO_ROOT" pull origin main
docker compose build
docker compose up -d
docker compose ps
