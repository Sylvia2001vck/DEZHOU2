#!/usr/bin/env bash
# 从 backend-java 目录加载 .env.local 后启动网关（jar 需已存在：mvn -DskipTests package）
set -euo pipefail
cd "$(dirname "$0")"
REPO_ROOT="$(cd .. && pwd)"
export NEBULA_REPO_ROOT="${NEBULA_REPO_ROOT:-$REPO_ROOT}"
export NEBULA_ROOM_WORKER_HOST="${NEBULA_ROOM_WORKER_HOST:-127.0.0.1}"
export NEBULA_ROOM_WORKER_PORT="${NEBULA_ROOM_WORKER_PORT:-3101}"
export PORT="${PORT:-8080}"
if [[ -f .env.local ]]; then
  # shellcheck source=/dev/null
  source .env.local
fi
JAR="target/nebula-gateway.jar"
if [[ ! -f "$JAR" ]]; then
  echo "Missing $JAR — run: mvn -DskipTests package" >&2
  exit 1
fi
exec java -jar "$JAR" "$@"
