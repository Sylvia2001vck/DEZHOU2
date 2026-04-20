#!/usr/bin/env node
/**
 * Phase 1 — POST /api/rooms/create twice with the same matchId; roomCode must match.
 * Requires a running Java gateway + C++ worker; same process for both requests (no C++ restart).
 *
 * Usage:
 *   set BASE_URL=http://127.0.0.1:3000
 *   set SMOKE_LOGIN_USERNAME=youruser
 *   set SMOKE_PASSWORD=yourpass
 *   node scripts/smoke/phase1-idempotency.mjs
 *
 * Optional: SMOKE_MATCH_ID=hexstring (default: fixed test id)
 */

const base = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const loginUser = process.env.SMOKE_LOGIN_USERNAME;
const password = process.env.SMOKE_PASSWORD;
const matchId =
  process.env.SMOKE_MATCH_ID || "phase1smoke000000000000000000000000";

function extractSessionCookie(setCookie) {
  if (!setCookie) return null;
  const parts = Array.isArray(setCookie) ? setCookie : [setCookie];
  for (const p of parts) {
    const m = String(p).match(/^nebula_session=([^;]+)/);
    if (m) return `nebula_session=${m[1]}`;
  }
  return null;
}

async function login() {
  const body = new URLSearchParams({
    loginUsername: loginUser,
    password,
  });
  const res = await fetch(`${base}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`login HTTP ${res.status}: ${text}`);
  }
  const setCookieParts =
    typeof res.headers.getSetCookie === "function"
      ? res.headers.getSetCookie()
      : [res.headers.get("set-cookie")].filter(Boolean);
  let cookie = null;
  for (const part of setCookieParts) {
    cookie = extractSessionCookie(part);
    if (cookie) break;
  }
  if (!cookie) {
    throw new Error("login ok but no nebula_session Set-Cookie");
  }
  return cookie;
}

async function createRoom(cookie) {
  const form = new URLSearchParams({
    totalHands: "5",
    initialChips: "1000",
    visibility: "private",
    roomType: "bean_match",
    matchId,
  });
  const res = await fetch(`${base}/api/rooms/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: cookie,
    },
    body: form,
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`create room: non-JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }
  if (!res.ok || !json.ok) {
    throw new Error(`create room HTTP ${res.status}: ${text}`);
  }
  const code = json.roomCode;
  if (!code) throw new Error(`missing roomCode in ${text}`);
  return String(code);
}

async function main() {
  if (!loginUser || !password) {
    console.error("Set SMOKE_LOGIN_USERNAME and SMOKE_PASSWORD.");
    process.exit(1);
  }
  console.log(`BASE_URL=${base} matchId=${matchId}`);
  const cookie = await login();
  const a = await createRoom(cookie);
  const b = await createRoom(cookie);
  if (a !== b) {
    console.error(`FAIL: roomCode mismatch:\n  first:  ${a}\n  second: ${b}`);
    process.exit(1);
  }
  console.log(`PASS: roomCode identical twice: ${a}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
