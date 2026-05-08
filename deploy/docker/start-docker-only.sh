#!/usr/bin/env bash
# 只走 Docker：先 down 掉旧容器（释放 docker-proxy 占用的宿主机端口），再杀掉本机 java，最后 up。
# 用法：在 deploy/docker 目录执行  bash start-docker-only.sh
set -euo pipefail
cd "$(dirname "$0")"

#region agent log
LOG_FILE="$(cd ../.. && pwd)/debug-f4aaa4.log"
RUN_ID="run-$(date +%s)-$$"
dbg_log() {
  local hypothesis="$1"
  local message="$2"
  local data="$3"
  printf '{"sessionId":"f4aaa4","runId":"%s","hypothesisId":"%s","location":"deploy/docker/start-docker-only.sh","message":"%s","data":%s,"timestamp":%s}\n' \
    "$RUN_ID" "$hypothesis" "$message" "$data" "$(date +%s%3N)" >> "$LOG_FILE"
}

port_snapshot() {
  local tag="$1"
  local ss_line
  ss_line="$(sudo ss -tlnp 2>/dev/null | grep ":${PORT} " || true)"
  echo "[nebula][${tag}] ${ss_line:-<empty>}"
  # #region agent log
  dbg_log "H5" "port_snapshot_${tag}" "{\"ss\":\"$(printf '%s' "$ss_line" | sed 's/"/\\"/g')\"}"
  # #endregion
}
#endregion

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

#region agent log
dbg_log "H1" "script_start" "{\"port\":\"${PORT}\",\"pwd\":\"$(pwd)\"}"
#endregion

echo "[nebula] host port: ${PORT}"
port_snapshot "start"

echo "[nebula] docker compose down (remove old gateway + release docker-proxy on :${PORT})..."
#region agent log
dbg_log "H2" "before_down_port_snapshot" "{\"ss\":\"$(sudo ss -tlnp 2>/dev/null | grep ":${PORT} " | sed 's/"/\\"/g' | tr '\n' ';')\"}"
#endregion
docker compose down --remove-orphans 2>/dev/null || true
sleep 2
port_snapshot "after_down"
#region agent log
dbg_log "H2" "after_down_port_snapshot" "{\"ss\":\"$(sudo ss -tlnp 2>/dev/null | grep ":${PORT} " | sed 's/"/\\"/g' | tr '\n' ';')\"}"
#endregion

echo "[nebula] killing listeners on :${PORT} — java (host jar) and orphan docker-proxy..."

kill_on_port_by_comm() {
  local match="$1"
  local target_port="${2:-$PORT}"
  local p comm
  if command -v lsof >/dev/null 2>&1; then
    for p in $(sudo lsof -t -iTCP:"${target_port}" -sTCP:LISTEN 2>/dev/null || true); do
      [[ -z "$p" ]] && continue
      comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
      if [[ "$comm" == "$match" ]] || [[ "$comm" == "$match"* ]]; then
        echo "  kill $match pid=$p on :${target_port}"
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
  done < <(sudo ss -tlnp "sport = :${target_port}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u)
}

kill_on_port_by_comm java
kill_on_port_by_comm docker-proxy
sleep 1
kill_on_port_by_comm java
kill_on_port_by_comm docker-proxy
port_snapshot "after_kill"

for p in $(sudo ss -tlnp "sport = :${PORT}" 2>/dev/null | sed -n 's/.*pid=\([0-9]*\).*/\1/p' | sort -u); do
  [[ -z "$p" ]] && continue
  comm="$(ps -p "$p" -o comm= 2>/dev/null | tr -d ' ' || true)"
  if [[ "$comm" == "java" ]] || [[ "$comm" == "docker-proxy" ]]; then
    echo "[nebula] WARN: $comm still on :${PORT} pid=$p — sudo kill -9 $p"
  fi
done

unset NEBULA_ROOM_WORKER_HOST || true
#region agent log
dbg_log "H3" "before_up_port_snapshot" "{\"ss\":\"$(sudo ss -tlnp 2>/dev/null | grep ":${PORT} " | sed 's/"/\\"/g' | tr '\n' ';')\"}"
#endregion

# Build strategy:
# - default: rebuild gateway only (Compose stack is Java gateway only)
# - set NEBULA_BUILD_SCOPE=all synonym for rebuilding gateway (legacy name)
# - set NEBULA_BUILD_SCOPE=none to skip rebuild and reuse local images
BUILD_SCOPE="${NEBULA_BUILD_SCOPE:-gateway}"
case "$BUILD_SCOPE" in
  all)
    echo "[nebula] build scope: all → gateway image only (no C++ in compose)"
    docker compose build gateway
    ;;
  gateway)
    echo "[nebula] build scope: gateway (default, safer on low-memory CVM)"
    docker compose build gateway
    ;;
  none)
    echo "[nebula] build scope: none (reuse existing images)"
    ;;
  *)
    echo "[nebula] invalid NEBULA_BUILD_SCOPE=${BUILD_SCOPE}, expected all|gateway|none"
    exit 1
    ;;
esac

if docker compose up -d; then
  #region agent log
  dbg_log "H4" "compose_up_success" "{\"status\":\"ok\"}"
  #endregion
else
  port_snapshot "after_up_failed"
  #region agent log
  dbg_log "H4" "compose_up_failed" "{\"status\":\"failed\",\"ss\":\"$(sudo ss -tlnp 2>/dev/null | grep ":${PORT} " | sed 's/"/\\"/g' | tr '\n' ';')\"}"
  #endregion
  exit 1
fi
docker compose ps
