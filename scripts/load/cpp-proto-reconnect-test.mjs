import { ProtoWsClient, postWithCookie, randomName, registerAndLogin, sleep } from "./cpp-proto-client.mjs";

const BASE_URL = process.env.CPP_LOAD_BASE_URL || "http://127.0.0.1:3000";
const HARD_TIMEOUT_MS = Number(process.env.RECONNECT_TIMEOUT_MS || 120_000);
const AI_WAIT_MS = Number(process.env.CPP_AI_WAIT_MS || 61_000);
const clients = new Set();

function cleanup() {
  for (const client of clients) client.close();
  clients.clear();
}

async function createPlayer(username) {
  const auth = await registerAndLogin(BASE_URL, username);
  const client = await new ProtoWsClient({ baseUrl: BASE_URL, cookie: auth.cookie }).connect();
  clients.add(client);
  return { ...auth, client };
}

async function joinSeatAndTrack(player, roomCode, seatIdx) {
  const roomStatePromise = player.client.waitFor("room_state", (payload) => payload?.roomId === roomCode, 10_000);
  player.client.send("join_room", { roomId: roomCode, name: player.username, clientId: player.username });
  await roomStatePromise;
  const seatSessionPromise = player.client.waitFor("seat_session", (payload) => payload?.roomId === roomCode, 10_000);
  const seatTakenPromise = player.client.waitFor("seat_taken", (payload) => Number(payload?.seatIdx) === seatIdx, 10_000);
  player.client.send("take_seat", { seatIdx });
  await seatTakenPromise;
  const seatSession = await seatSessionPromise;
  return seatSession;
}

async function waitForAiManaged(hostClient, seatIdx, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const latest = [...hostClient.allEvents].reverse().find((item) => item.eventName === "room_state");
    const target = latest?.payload?.seats?.find((seat) => Number(seat?.seatIdx) === seatIdx && seat?.aiManaged);
    if (target) return latest.payload;
    await sleep(500);
  }
  throw new Error("AI takeover room_state not observed");
}

async function main() {
  const host = await createPlayer(randomName("cpp-reconnect-host"));
  const player = await createPlayer(randomName("cpp-reconnect-player"));
  const room = await postWithCookie(BASE_URL, "/api/rooms/create", host.cookie, {
    visibility: "private",
    totalHands: 3,
    initialChips: 1000
  });

  await joinSeatAndTrack(host, room.roomCode, 0);
  const seatSession = await joinSeatAndTrack(player, room.roomCode, 1);

  host.client.send("toggle_ai", { seatIdx: 2 });
  await sleep(500);
  host.client.send("start_game", { totalHands: 3, initialChips: 1000 });
  await sleep(1500);

  player.client.close();
  clients.delete(player.client);
  await sleep(AI_WAIT_MS);

  const managedState = await waitForAiManaged(host.client, 1, 8_000);
  const managedSeat = managedState.seats.find((seat) => Number(seat?.seatIdx) === 1);

  const returning = await new ProtoWsClient({ baseUrl: BASE_URL, cookie: player.cookie }).connect();
  clients.add(returning);
  const youStatePromise = returning.waitFor("you_state", (payload) => payload?.roomId === room.roomCode, 10_000);
  const replayedRoomStatePromise = returning.waitFor("room_state", (payload) => payload?.roomId === room.roomCode, 10_000);
  const gameStatePromise = returning.waitFor("game_state", (payload) => payload?.roomId === room.roomCode, 10_000);
  const privateHandPromise = returning.waitFor("private_hand", (payload) => Number(payload?.seatIdx) === 1, 10_000);
  returning.send("join_room", {
    roomId: room.roomCode,
    name: player.username,
    clientId: `${player.username}-return`,
    reconnectToken: seatSession.reconnectToken,
    sessionId: seatSession.sessionId
  });

  const youState = await youStatePromise;
  const replayedRoomState = await replayedRoomStatePromise;
  const gameState = await gameStatePromise;
  const privateHand = await privateHandPromise;
  const restoredSeat = replayedRoomState.seats.find((seat) => Number(seat?.seatIdx) === 1);

  if (Number(youState.seatIdx) !== 1) throw new Error(`reconnect seat mismatch: ${youState.seatIdx}`);
  if (!managedSeat?.aiManaged) throw new Error("expected AI takeover before reconnect");
  if (restoredSeat?.aiManaged) throw new Error("seat still AI managed after reclaim");
  if (!gameState?.started) throw new Error("expected full game_state sync after reconnect");
  if (!Array.isArray(privateHand?.hand) || privateHand.hand.length < 2) throw new Error("expected private_hand full sync after reconnect");

  console.log(JSON.stringify({
    ok: true,
    roomId: room.roomCode,
    aiTakeoverObserved: true,
    sessionId: seatSession.sessionId,
    reconnectSeatIdx: youState.seatIdx
  }, null, 2));
}

const hardTimeout = setTimeout(() => {
  console.error(new Error(`cpp-proto-reconnect-test timed out after ${HARD_TIMEOUT_MS}ms`));
  cleanup();
  process.exit(1);
}, HARD_TIMEOUT_MS);

main().then(() => {
  clearTimeout(hardTimeout);
  cleanup();
  process.exit(0);
}).catch((err) => {
  clearTimeout(hardTimeout);
  console.error(err);
  cleanup();
  process.exit(1);
});
