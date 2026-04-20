#!/usr/bin/env node
/**
 * Phase 1 — cloud/local env checklist for Redis+MySQL async match pipeline.
 * Run with the same env your Java gateway process uses (export or platform dashboard).
 *
 * Does not start servers; only validates variable presence for the documented pipeline.
 */

const requiredAsync = [
  ["REDIS_HOST", "Lettuce + match queue + locks"],
  ["MYSQL_HOST", "match_message table + MatchMessageDao"],
];

const recommended = [
  ["MYSQL_USER", "default root if unset"],
  ["MYSQL_PASSWORD", ""],
  ["MYSQL_DATABASE", "default nebula_poker"],
  ["MYSQL_PORT", "default 3306"],
  ["NEBULA_BRIDGE_SECRET", "must match C++ worker"],
  ["NEBULA_ROOM_WORKER_HOST", "default 127.0.0.1"],
  ["NEBULA_ROOM_WORKER_PORT", "default 3101"],
  ["PORT", "Javalin listen port"],
  ["NEBULA_REPO_ROOT", "repo root for static files"],
];

function ok(name) {
  const v = process.env[name];
  return v != null && String(v).length > 0;
}

let failed = false;
console.log("=== Phase 1 async pipeline (Redis + MySQL) ===\n");
for (const [name, hint] of requiredAsync) {
  const pass = ok(name);
  if (!pass) failed = true;
  console.log(`${pass ? "OK  " : "FAIL"} ${name} — ${hint}`);
}
console.log("\n=== Recommended (gateway ↔ C++ ↔ DB) ===\n");
for (const [name, hint] of recommended) {
  const pass = ok(name);
  console.log(`${pass ? "set" : "—  "} ${name} — ${hint}`);
}

console.log(`
=== Manual: single-room match (6 players, one tier) ===
1. Register/login 6 accounts with similar gold so beanTier() maps to the same tier.
2. POST /api/matchmaking/queue-bean (application/x-www-form-urlencoded) per user with Cookie.
3. Expect exactly one match batch: one roomCode for all six; MySQL match_message one row status=1.
   (If >=12 players keep queueing, you may get two rooms — cap at 6–7 for a single-room check.)
`);

process.exit(failed ? 1 : 0);
