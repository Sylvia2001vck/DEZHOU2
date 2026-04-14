import { ProtoWsClient, postWithCookie, randomName, registerAndLogin, sleep } from "./cpp-proto-client.mjs";

const BASE_URL = process.env.CPP_LOAD_BASE_URL || "http://127.0.0.1:3000";
const HARD_TIMEOUT_MS = Number(process.env.LOAD_TIMEOUT_MS || 45_000);
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

async function joinAndSeat(player, roomCode, seatIdx) {
  const roomStatePromise = player.client.waitFor("room_state", (payload) => payload?.roomId === roomCode, 10_000);
  player.client.send("join_room", { roomId: roomCode, name: player.username, clientId: player.username });
  await roomStatePromise;
  const seatTakenPromise = player.client.waitFor("seat_taken", (payload) => Number(payload?.seatIdx) === seatIdx, 10_000);
  player.client.send("take_seat", { seatIdx });
  await seatTakenPromise;
}

async function main() {
  const hosts = [randomName("cpp-host-a"), randomName("cpp-host-b")];
  const hostA = await createPlayer(hosts[0]);
  const hostB = await createPlayer(hosts[1]);
  const roomA = await postWithCookie(BASE_URL, "/api/rooms/create", hostA.cookie, { visibility: "private", totalHands: 3, initialChips: 1000 });
  const roomB = await postWithCookie(BASE_URL, "/api/rooms/create", hostB.cookie, { visibility: "private", totalHands: 3, initialChips: 1000 });

  const players = [hostA, hostB];
  for (let i = 0; i < 8; i++) players.push(await createPlayer(randomName(`cpp-p${i}`)));

  await joinAndSeat(hostA, roomA.roomCode, 0);
  await joinAndSeat(hostB, roomB.roomCode, 0);

  for (let i = 0; i < 4; i++) await joinAndSeat(players[i + 2], roomA.roomCode, i + 1);
  for (let i = 0; i < 4; i++) await joinAndSeat(players[i + 6], roomB.roomCode, i + 1);

  hostA.client.send("start_game", { totalHands: 3, initialChips: 1000 });
  hostB.client.send("start_game", { totalHands: 3, initialChips: 1000 });
  await sleep(1500);

  for (const player of players) {
    player.client.send("action", { type: "call", raiseBy: 0 });
  }

  await sleep(2000);

  console.log(JSON.stringify({
    ok: true,
    rooms: [roomA.roomCode, roomB.roomCode],
    players: players.length,
    mode: "cpp-protobuf-ws"
  }, null, 2));
}

const hardTimeout = setTimeout(() => {
  console.error(new Error(`cpp-proto-room-storm timed out after ${HARD_TIMEOUT_MS}ms`));
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
