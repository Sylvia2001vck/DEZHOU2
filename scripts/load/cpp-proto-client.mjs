import path from "path";
import { fileURLToPath } from "url";
import protobuf from "protobufjs";
import WebSocket from "ws";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTO_PATH = path.resolve(__dirname, "../../backend-cpp/proto/poker.proto");

const OUTGOING_TYPES = {
  join_room: "JoinRoomRequest",
  take_seat: "SeatRequest",
  toggle_ai: "SeatRequest",
  kick_seat: "SeatRequest",
  start_game: "StartGameRequest",
  action: "ActionRequest",
  rebuy: "AmountRequest",
  rebuy_request: "AmountRequest",
  rebuy_approve: "RebuyApproveRequest",
  rebuy_deny: "SeatRequest",
  set_decor: "DecorRequest",
  voice_signal: "VoiceSignalMessage",
  voice_join: "Empty",
  voice_leave: "Empty",
  next_hand: "Empty",
  ack_match_over: "Empty"
};

const INCOMING_TYPES = {
  connect: "TextMessage",
  auth_state: "AuthState",
  you_state: "YouState",
  seat_taken: "SeatTaken",
  seat_session: "SeatSession",
  room_state: "RoomState",
  activity: "TextMessage",
  activity_sync: "ActivitySync",
  error_msg: "ErrorMessage",
  room_closed: "RoomClosed",
  kicked: "Kicked",
  kicked_in_hand: "Kicked",
  rebuy_requested: "RebuyRequested",
  rebuy_denied: "RebuyDenied",
  voice_peers: "VoicePeers",
  voice_peer_joined: "VoicePeerJoined",
  voice_peer_left: "VoicePeerLeft",
  voice_signal: "VoiceSignalMessage",
  player_action: "PlayerAction",
  hand_over: "HandOver",
  match_over: "MatchOver",
  private_hand: "PrivateHand",
  game_state: "GameState",
  turn: "TurnMessage",
  user_profile: "UserProfile",
  matchmaking_status: "MatchmakingStatus",
  match_found: "MatchFound"
};

let cachedRoot = null;

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomName(prefix = "cpp-user") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export async function loadRoot() {
  if (!cachedRoot) cachedRoot = await protobuf.load(PROTO_PATH);
  return cachedRoot;
}

export function httpToWs(httpUrl) {
  return httpUrl.replace(/^http:/, "ws:").replace(/^https:/, "wss:");
}

function getSetCookies(headers) {
  if (typeof headers.getSetCookie === "function") return headers.getSetCookie();
  const single = headers.get("set-cookie");
  return single ? [single] : [];
}

export async function registerAndLogin(baseUrl, username, password = "pass123456") {
  const body = new URLSearchParams({ username, password });
  const response = await fetch(`${baseUrl}/api/auth/register`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body
  });
  const payload = await response.json().catch(() => ({}));
  const cookies = getSetCookies(response.headers).map((item) => item.split(";")[0]).join("; ");
  if (!response.ok && response.status !== 409) {
    throw new Error(`register failed: ${response.status} ${payload?.message || ""}`.trim());
  }
  if (response.status === 409) {
    const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body
    });
    const loginPayload = await loginRes.json().catch(() => ({}));
    const loginCookies = getSetCookies(loginRes.headers).map((item) => item.split(";")[0]).join("; ");
    if (!loginRes.ok) throw new Error(`login failed: ${loginRes.status} ${loginPayload?.message || ""}`.trim());
    return { cookie: loginCookies, user: loginPayload.user, username, password };
  }
  return { cookie: cookies, user: payload.user, username, password };
}

export async function postWithCookie(baseUrl, pathname, cookie, form = {}) {
  const response = await fetch(`${baseUrl}${pathname}`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      cookie
    },
    body: new URLSearchParams(Object.entries(form).map(([key, value]) => [key, String(value)]))
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`${pathname} failed: ${response.status} ${payload?.message || ""}`.trim());
  return payload;
}

export class ProtoWsClient {
  constructor({ baseUrl, cookie }) {
    this.baseUrl = baseUrl;
    this.cookie = cookie;
    this.ws = null;
    this.listeners = new Map();
    this.allEvents = [];
  }

  async connect() {
    const root = await loadRoot();
    this.root = root;
    this.Envelope = root.lookupType("nebula.poker.Envelope");
    this.ws = new WebSocket(`${httpToWs(this.baseUrl)}/ws`, {
      headers: this.cookie ? { Cookie: this.cookie } : {}
    });
    this.ws.binaryType = "nodebuffer";
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("ws connect timeout")), 10_000);
      this.ws.once("open", () => {
        clearTimeout(timer);
        resolve();
      });
      this.ws.once("error", (err) => {
        clearTimeout(timer);
        reject(err);
      });
    });
    this.ws.on("message", (data) => this.#handleMessage(data));
    return this;
  }

  on(eventName, handler) {
    if (!this.listeners.has(eventName)) this.listeners.set(eventName, new Set());
    this.listeners.get(eventName).add(handler);
  }

  off(eventName, handler) {
    this.listeners.get(eventName)?.delete(handler);
  }

  async waitFor(eventName, predicate = () => true, timeoutMs = 10_000) {
    return await new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.off(eventName, onEvent);
        reject(new Error(`Timeout waiting for ${eventName}`));
      }, timeoutMs);
      const onEvent = (payload) => {
        if (!predicate(payload)) return;
        clearTimeout(timer);
        this.off(eventName, onEvent);
        resolve(payload);
      };
      this.on(eventName, onEvent);
    });
  }

  send(eventName, payload = {}) {
    const typeName = OUTGOING_TYPES[eventName];
    if (!typeName) throw new Error(`Unknown outgoing event ${eventName}`);
    const Type = this.root.lookupType(`nebula.poker.${typeName}`);
    const inner = Type.encode(Type.create(payload)).finish();
    const env = this.Envelope.encode(this.Envelope.create({ eventName, payload: inner })).finish();
    this.ws.send(env);
  }

  close() {
    try { this.ws?.close(); } catch (_) {}
  }

  #handleMessage(data) {
    const env = this.Envelope.decode(new Uint8Array(data));
    const typeName = INCOMING_TYPES[env.eventName];
    let payload = {};
    if (typeName) {
      const Type = this.root.lookupType(`nebula.poker.${typeName}`);
      payload = Type.toObject(Type.decode(env.payload), { longs: Number, bytes: Uint8Array });
    }
    this.allEvents.push({ eventName: env.eventName, payload, receivedAt: Date.now() });
    const handlers = this.listeners.get(env.eventName);
    if (!handlers) return;
    for (const handler of handlers) handler(payload);
  }
}
