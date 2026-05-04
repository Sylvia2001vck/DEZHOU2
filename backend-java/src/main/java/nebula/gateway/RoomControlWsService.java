package nebula.gateway;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.javalin.websocket.WsContext;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Java-owned pregame room control over WS text frames.
 *
 * <p>Scope (current phase): join room, take seat, toggle AI, host detection, reconnect token emit.
 */
public final class RoomControlWsService {
  private static final int MAX_SEATS = 10;

  private final AuthService auth;
  private final Gson gson = new Gson();
  private final Map<String, Client> clients = new ConcurrentHashMap<>();
  private final Map<String, Room> rooms = new ConcurrentHashMap<>();

  public RoomControlWsService(AuthService auth) {
    this.auth = auth;
  }

  public void onConnect(String socketId, WsContext ctx) {
    GatewayIdentity gid = auth.resolveFromCookie(nullToEmpty(ctx.header("Cookie"))).orElse(null);
    Client c = new Client();
    c.socketId = socketId;
    c.ctx = ctx;
    c.userId = gid == null ? 0L : gid.userId;
    c.loginUsername = gid == null ? "" : safe(gid.loginUsername);
    c.displayName = c.loginUsername.isEmpty() ? "Player" : c.loginUsername;
    clients.put(socketId, c);
  }

  public void onClose(String socketId) {
    Client c = clients.remove(socketId);
    if (c == null) return;
    if (c.roomId == null || c.roomId.isEmpty()) return;
    Room room = rooms.get(c.roomId);
    if (room == null) return;
    synchronized (room) {
      room.socketIds.remove(socketId);
      for (int i = 0; i < MAX_SEATS; i++) {
        Seat s = room.seats.get(i);
        if (s != null && "player".equals(s.type) && socketId.equals(s.socketId)) {
          room.seats.set(i, null);
        }
      }
      if (room.hostSocketId != null && room.hostSocketId.equals(socketId)) {
        room.hostSocketId = room.socketIds.isEmpty() ? "" : room.socketIds.iterator().next();
      }
      if (room.socketIds.isEmpty()) {
        rooms.remove(room.roomId);
      } else {
        broadcastRoomState(room);
      }
    }
  }

  public void onTextMessage(String socketId, String raw) {
    Client c = clients.get(socketId);
    if (c == null) return;
    try {
      JsonObject msg = JsonParser.parseString(raw).getAsJsonObject();
      String type = msg.has("type") ? safe(msg.get("type").getAsString()) : "";
      if (!"control_event".equals(type)) return;
      String eventName = msg.has("eventName") ? safe(msg.get("eventName").getAsString()) : "";
      JsonObject payload = msg.has("payload") && msg.get("payload").isJsonObject() ? msg.getAsJsonObject("payload") : new JsonObject();
      switch (eventName) {
        case "join_room" -> handleJoinRoom(c, payload);
        case "take_seat" -> handleTakeSeat(c, payload);
        case "toggle_ai" -> handleToggleAi(c, payload);
        case "set_decor" -> handleSetDecor(c, payload);
        case "start_game" -> handleStartGame(c, payload);
        case "action" -> handleAction(c, payload);
        case "next_hand" -> handleNextHand(c);
        default -> {
          // Ignore unknown control events in this phase.
        }
      }
    } catch (Exception e) {
      sendEvent(c, "error_msg", mapOf("msg", "Invalid control message."));
    }
  }

  private void handleJoinRoom(Client c, JsonObject payload) {
    if (c.userId <= 0) {
      sendEvent(c, "error_msg", mapOf("msg", "Please log in before joining a room."));
      return;
    }
    String roomId = safe(payload.has("roomId") ? payload.get("roomId").getAsString() : "").trim().toUpperCase();
    if (roomId.isEmpty()) {
      sendEvent(c, "error_msg", mapOf("msg", "Room code is required."));
      return;
    }

    c.displayName = safe(payload.has("name") ? payload.get("name").getAsString() : c.displayName);
    c.clientId = safe(payload.has("clientId") ? payload.get("clientId").getAsString() : c.clientId);

    Room room = rooms.computeIfAbsent(roomId, Room::new);
    synchronized (room) {
      if (c.roomId != null && !c.roomId.isEmpty() && !roomId.equals(c.roomId)) {
        Room prev = rooms.get(c.roomId);
        if (prev != null) {
          synchronized (prev) {
            prev.socketIds.remove(c.socketId);
            for (int i = 0; i < MAX_SEATS; i++) {
              Seat s = prev.seats.get(i);
              if (s != null && "player".equals(s.type) && c.socketId.equals(s.socketId)) prev.seats.set(i, null);
            }
            if (prev.hostSocketId != null && prev.hostSocketId.equals(c.socketId)) {
              prev.hostSocketId = prev.socketIds.isEmpty() ? "" : prev.socketIds.iterator().next();
            }
            if (prev.socketIds.isEmpty()) rooms.remove(prev.roomId);
            else broadcastRoomState(prev);
          }
        }
      }
      c.roomId = roomId;
      room.socketIds.add(c.socketId);
      if (room.hostSocketId == null || room.hostSocketId.isEmpty() || !room.socketIds.contains(room.hostSocketId)) {
        room.hostSocketId = c.socketId;
      }
      sendEvent(c, "you_state", mapOf("roomId", room.roomId, "seatIdx", c.seatIdx, "isHost", room.hostSocketId.equals(c.socketId)));
      broadcastRoomState(room);
    }
  }

  private void handleTakeSeat(Client c, JsonObject payload) {
    if (c.userId <= 0) {
      sendEvent(c, "error_msg", mapOf("msg", "Please log in before taking a seat."));
      return;
    }
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: room not found."));
      return;
    }
    int seatIdx = payload.has("seatIdx") ? payload.get("seatIdx").getAsInt() : -1;
    synchronized (room) {
      if (seatIdx < 0 || seatIdx >= MAX_SEATS) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: invalid seat index."));
        return;
      }
      Seat occupied = room.seats.get(seatIdx);
      if (occupied != null && !"player".equals(occupied.type)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: seat occupied by AI."));
        return;
      }
      if (occupied != null && !"".equals(occupied.socketId) && !c.socketId.equals(occupied.socketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot take seat: seat already occupied."));
        return;
      }
      for (int i = 0; i < MAX_SEATS; i++) {
        Seat s = room.seats.get(i);
        if (s != null && "player".equals(s.type) && c.socketId.equals(s.socketId)) room.seats.set(i, null);
      }
      Seat s = new Seat();
      s.type = "player";
      s.name = c.displayName == null || c.displayName.isEmpty() ? "Player" : c.displayName;
      s.socketId = c.socketId;
      s.clientId = nullToEmpty(c.clientId);
      s.decor = "none";
      room.seats.set(seatIdx, s);
      c.seatIdx = seatIdx;
      c.sessionId = c.sessionId == null || c.sessionId.isEmpty() ? randomToken() : c.sessionId;
      c.reconnectToken = randomToken();
      sendEvent(c, "seat_taken", mapOf("seatIdx", seatIdx));
      sendEvent(
          c,
          "seat_session",
          mapOf(
              "roomId", room.roomId,
              "reconnectToken", c.reconnectToken,
              "sessionId", c.sessionId,
              "lastSeenSeq", 0));
      sendEvent(c, "you_state", mapOf("roomId", room.roomId, "seatIdx", seatIdx, "isHost", room.hostSocketId.equals(c.socketId)));
      broadcastRoomState(room);
    }
  }

  private void handleToggleAi(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: room not found."));
      return;
    }
    int seatIdx = payload.has("seatIdx") ? payload.get("seatIdx").getAsInt() : -1;
    synchronized (room) {
      if (!c.socketId.equals(room.hostSocketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: only host can add or remove AI."));
        return;
      }
      if (seatIdx < 0 || seatIdx >= MAX_SEATS) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: invalid seat index."));
        return;
      }
      Seat cur = room.seats.get(seatIdx);
      if (cur != null && "player".equals(cur.type)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot toggle AI: player is already seated there."));
        return;
      }
      if (cur != null && "ai".equals(cur.type)) {
        room.seats.set(seatIdx, null);
      } else {
        Seat ai = new Seat();
        ai.type = "ai";
        ai.name = "AI-" + seatIdx;
        ai.socketId = "";
        ai.clientId = "";
        ai.decor = "none";
        room.seats.set(seatIdx, ai);
      }
      broadcastRoomState(room);
    }
  }

  private void handleSetDecor(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot set decor: room not found."));
      return;
    }
    if (c.seatIdx < 0 || c.seatIdx >= MAX_SEATS) {
      sendEvent(c, "error_msg", mapOf("msg", "Take a seat before setting decor."));
      return;
    }
    String decor = safe(payload.has("decor") ? payload.get("decor").getAsString() : "none");
    if (!"none".equals(decor) && !"cola".equals(decor) && !"coffee".equals(decor) && !"wine".equals(decor) && !"cigar".equals(decor)) {
      decor = "none";
    }
    synchronized (room) {
      Seat seat = room.seats.get(c.seatIdx);
      if (seat == null || !"player".equals(seat.type) || !c.socketId.equals(seat.socketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Cannot set decor: seat ownership mismatch."));
        return;
      }
      seat.decor = decor;
      broadcastRoomState(room);
    }
  }

  private void handleStartGame(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null) {
      sendEvent(c, "error_msg", mapOf("msg", "Cannot start game: room not found."));
      return;
    }
    synchronized (room) {
      if (!c.socketId.equals(room.hostSocketId)) {
        sendEvent(c, "error_msg", mapOf("msg", "Only host can start game."));
        return;
      }
      int occupied = 0;
      for (int i = 0; i < MAX_SEATS; i++) {
        if (room.seats.get(i) != null) occupied++;
      }
      if (occupied < 2) {
        sendEvent(c, "error_msg", mapOf("msg", "At least 2 players (or AI) are required."));
        return;
      }
      room.totalHands = payload.has("totalHands") ? Math.max(1, payload.get("totalHands").getAsInt()) : room.totalHands;
      room.initialChips = payload.has("initialChips") ? Math.max(1000, payload.get("initialChips").getAsInt()) : room.initialChips;
      room.started = true;
      room.handNum = 1;
      room.round = "PRE_FLOP";
      room.pot = 0;
      room.currentMaxBet = 0;
      room.minRaise = 50;
      room.currentTurnSeatIdx = firstPlayerSeat(room);
      room.dealerSeatIdx = room.currentTurnSeatIdx;
      broadcastRoomState(room);
      broadcastGameState(room);
      if (room.currentTurnSeatIdx >= 0) {
        broadcastTurn(room, room.currentTurnSeatIdx);
      }
    }
  }

  private void handleAction(Client c, JsonObject payload) {
    Room room = roomFor(c);
    if (room == null || !room.started) return;
    synchronized (room) {
      if (c.seatIdx < 0 || c.seatIdx != room.currentTurnSeatIdx) {
        sendEvent(c, "error_msg", mapOf("msg", "Not your turn."));
        return;
      }
      String type = safe(payload.has("type") ? payload.get("type").getAsString() : "").toUpperCase();
      if (type.isEmpty()) type = "CHECK";
      broadcastPlayerAction(room, c.seatIdx, type);
      int next = nextPlayerSeat(room, c.seatIdx);
      room.currentTurnSeatIdx = next;
      if (next >= 0) {
        broadcastTurn(room, next);
      }
      broadcastGameState(room);
    }
  }

  private void handleNextHand(Client c) {
    Room room = roomFor(c);
    if (room == null) return;
    synchronized (room) {
      if (!room.started) return;
      if (!c.socketId.equals(room.hostSocketId)) return;
      room.handNum += 1;
      room.round = "PRE_FLOP";
      room.currentTurnSeatIdx = firstPlayerSeat(room);
      broadcastGameState(room);
      if (room.currentTurnSeatIdx >= 0) broadcastTurn(room, room.currentTurnSeatIdx);
    }
  }

  private Room roomFor(Client c) {
    if (c.roomId == null || c.roomId.isEmpty()) return null;
    return rooms.get(c.roomId);
  }

  private void broadcastRoomState(Room room) {
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      Map<String, Object> payload = buildRoomState(room, sid);
      sendEvent(cc, "room_state", payload);
    }
  }

  private Map<String, Object> buildRoomState(Room room, String forSocketId) {
    List<Object> seats = new ArrayList<>();
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) {
        seats.add(null);
        continue;
      }
      Map<String, Object> one = new HashMap<>();
      one.put("seatIdx", i);
      one.put("type", s.type);
      one.put("name", s.name);
      one.put("decor", s.decor == null ? "none" : s.decor);
      one.put("socketId", nullToEmpty(s.socketId));
      one.put("clientId", nullToEmpty(s.clientId));
      one.put("aiManaged", false);
      one.put("disconnectedAt", 0);
      seats.add(one);
    }
    Map<String, Object> settings = new HashMap<>();
    settings.put("totalHands", room.totalHands);
    settings.put("initialChips", room.initialChips);
    settings.put("smallBlind", 50);
    settings.put("bigBlind", 100);

    Map<String, Object> state = new HashMap<>();
    state.put("roomId", room.roomId);
    state.put("hostSocketId", nullToEmpty(room.hostSocketId));
    state.put("hostSeatIdx", findHostSeatIdx(room));
    state.put("isHost", forSocketId != null && forSocketId.equals(room.hostSocketId));
    state.put("started", room.started);
    state.put("ownerUserId", 0);
    state.put("roomCode", room.roomId);
    state.put("visibility", "private");
    state.put("status", room.started ? "playing" : "waiting");
    state.put("maxPlayers", MAX_SEATS);
    state.put("settings", settings);
    state.put("seats", seats);
    return state;
  }

  private int findHostSeatIdx(Room room) {
    if (room.hostSocketId == null || room.hostSocketId.isEmpty()) return -1;
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s != null && "player".equals(s.type) && room.hostSocketId.equals(s.socketId)) return i;
    }
    return -1;
  }

  private void sendEvent(Client c, String eventName, Object payload) {
    if (c == null || c.ctx == null) return;
    try {
      JsonObject out = new JsonObject();
      out.addProperty("eventName", eventName);
      out.add("payload", gson.toJsonTree(payload));
      c.ctx.send(out.toString());
    } catch (Exception ignored) {
    }
  }

  private void broadcastPlayerAction(Room room, int seatIdx, String text) {
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "player_action", mapOf("seatIdx", seatIdx, "text", text));
    }
  }

  private void broadcastTurn(Room room, int activeSeatIdx) {
    room.turnNonce += 1;
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "turn", mapOf("activeSeatIdx", activeSeatIdx, "turnNonce", room.turnNonce));
    }
  }

  private void broadcastGameState(Room room) {
    List<Map<String, Object>> players = new ArrayList<>();
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) continue;
      players.add(
          mapOf(
              "seatIdx", i,
              "name", s.name,
              "type", s.type,
              "chips", room.initialChips,
              "currentBet", 0,
              "isFolded", false,
              "isBankrupt", false,
              "totalBuyIn", room.initialChips));
    }
    Map<String, Object> settings =
        mapOf("totalHands", room.totalHands, "initialChips", room.initialChips, "smallBlind", 50, "bigBlind", 100);
    Map<String, Object> game =
        mapOf(
            "roomId", room.roomId,
            "started", room.started,
            "settings", settings,
            "handNum", room.handNum,
            "dealerSeatIdx", room.dealerSeatIdx,
            "sbSeatIdx", -1,
            "bbSeatIdx", -1,
            "activeSeatIdx", room.currentTurnSeatIdx,
            "pot", room.pot,
            "round", room.round,
            "communityCards", new ArrayList<>(),
            "currentMaxBet", room.currentMaxBet,
            "minRaise", room.minRaise,
            "players", players);
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "game_state", game);
    }
  }

  private int firstPlayerSeat(Room room) {
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) continue;
      if ("player".equals(s.type) || "ai".equals(s.type)) return i;
    }
    return -1;
  }

  private int nextPlayerSeat(Room room, int current) {
    if (current < 0) return firstPlayerSeat(room);
    for (int step = 1; step <= MAX_SEATS; step++) {
      int idx = (current + step) % MAX_SEATS;
      Seat s = room.seats.get(idx);
      if (s == null) continue;
      if ("player".equals(s.type) || "ai".equals(s.type)) return idx;
    }
    return -1;
  }

  private static String randomToken() {
    return UUID.randomUUID().toString().replace("-", "");
  }

  private static String safe(String s) {
    return s == null ? "" : s;
  }

  private static String nullToEmpty(String s) {
    return s == null ? "" : s;
  }

  private static Map<String, Object> mapOf(Object... kv) {
    Map<String, Object> m = new HashMap<>();
    for (int i = 0; i + 1 < kv.length; i += 2) {
      m.put(String.valueOf(kv[i]), kv[i + 1]);
    }
    return m;
  }

  private static final class Client {
    String socketId = "";
    WsContext ctx;
    long userId = 0;
    String loginUsername = "";
    String displayName = "";
    String clientId = "";
    String roomId = "";
    int seatIdx = -1;
    String reconnectToken = "";
    String sessionId = "";
  }

  private static final class Seat {
    String type = "player"; // player|ai
    String name = "Player";
    String socketId = "";
    String clientId = "";
    String decor = "none";
  }

  private static final class Room {
    final String roomId;
    final List<Seat> seats = new ArrayList<>();
    final Set<String> socketIds = new HashSet<>();
    String hostSocketId = "";
    boolean started = false;
    int totalHands = 5;
    int initialChips = 1000;
    int handNum = 0;
    int dealerSeatIdx = -1;
    int currentTurnSeatIdx = -1;
    int turnNonce = 0;
    int pot = 0;
    int currentMaxBet = 0;
    int minRaise = 50;
    String round = "WAITING";

    Room(String roomId) {
      this.roomId = roomId;
      for (int i = 0; i < MAX_SEATS; i++) seats.add(null);
    }
  }
}

