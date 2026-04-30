#!/usr/bin/env bash
# 只走 Docker 网关：杀掉占用宿主机端口的本机 Java（不杀 docker-proxy），再起 compose。
# 用法：在 deploy/docker 目录执行  bash start-docker-only.sh
set -euo pipefail
cd "$(dirname "$0")"

PORT=8080
if [[ -f .env ]]; then
  line="$(grep -E '^GATEWAY_PUBLISH_PORT=' .env | tail -1 || true)"
  if [[ -n "$line" ]]; then
    PORT="${line#*=}"
    PORT="${PORT//\"/}"
    PORT="${PORT//\'/}"
    PORT="${PORT// /}"
  fi
fi

echo "[nebula] host port: ${PORT}"
echo "[nebula] killing Java process(es) listening on :${PORT} (docker-proxy left untouched)..."

kill_java_on_port() {
  local p comm
  if command -v lsof >/dev/null 2>&1; then
    for p in $(sudo lsof -t -iTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null || true); do
      [[ -z "$p" ]] && continue
      comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
      if [[ "$comm" == "java" ]]; then
        echo "  kill java pid=$p"
        sudo kill "$p" 2>/dev/null || true
      fi
    done
    return
  fi
  # lsof 未安装时用 ss（需 procps / iproute2）
  while read -r p; do
    [[ -z "$p" ]] && continue
    comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
    if [[ "$comm" == "java" ]]; then
      echo "  kill java pid=$p (via ss)"
      sudo kill "$p" 2>/dev/null || true
    fi
  done < <(sudo ss -tlnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u)
}

kill_java_on_port
sleep 1
kill_java_on_port

for p in $(sudo ss -tlnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u); do
  [[ -z "$p" ]] && continue
  if [[ "$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ')" == "java" ]]; then
    echo "[nebula] WARN: java still holding :${PORT} (pid=$p) — sudo kill -9 $p then re-run"
  fi
done

unset NEBULA_ROOM_WORKER_HOST || true
docker compose up -d --build
docker compose ps
