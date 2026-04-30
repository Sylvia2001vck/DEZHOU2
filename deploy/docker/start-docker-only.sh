#!/usr/bin/env bash
# 只走 Docker：先 down 掉旧容器（释放 docker-proxy 占用的宿主机端口），再杀掉本机 java，最后 up。
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

echo "[nebula] docker compose down (remove old gateway + release docker-proxy on :${PORT})..."
docker compose down --remove-orphans 2>/dev/null || true
sleep 2

echo "[nebula] killing listeners on :${PORT} — java (host jar) and orphan docker-proxy..."

kill_on_port_by_comm() {
  local match="$1"
  local p comm
  if command -v lsof >/dev/null 2>&1; then
    for p in $(sudo lsof -t -iTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null || true); do
      [[ -z "$p" ]] && continue
      comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
      if [[ "$comm" == "$match" ]]; then
        echo "  kill $match pid=$p"
        sudo kill "$p" 2>/dev/null || true
      fi
    done
    return
  fi
  while read -r p; do
    [[ -z "$p" ]] && continue
    comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
    if [[ "$comm" == "$match" ]]; then
      echo "  kill $match pid=$p (via ss)"
      sudo kill "$p" 2>/dev/null || true
    fi
  done < <(sudo ss -tlnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u)
}

kill_on_port_by_comm java
kill_on_port_by_comm docker-proxy
sleep 1
kill_on_port_by_comm java
kill_on_port_by_comm docker-proxy

for p in $(sudo ss -tlnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u); do
  [[ -z "$p" ]] && continue
  comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
  if [[ "$comm" == "java" ]] || [[ "$comm" == "docker-proxy" ]]; then
    echo "[nebula] WARN: $comm still on :${PORT} pid=$p — sudo kill -9 $p"
  fi
done

unset NEBULA_ROOM_WORKER_HOST || true
docker compose up -d --build
docker compose ps
