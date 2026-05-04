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

  private Room roomFor(Client c) {
    if (c.roomId == null || c.roomId.isEmpty()) return null;
    return rooms.get(c.roomId);
  }

  private void broadcastRoomState(Room room) {
    Map<String, Object> payload = buildRoomState(room);
    for (String sid : room.socketIds) {
      Client cc = clients.get(sid);
      if (cc == null) continue;
      sendEvent(cc, "room_state", payload);
    }
  }

  private Map<String, Object> buildRoomState(Room room) {
    List<Map<String, Object>> seats = new ArrayList<>();
    for (int i = 0; i < MAX_SEATS; i++) {
      Seat s = room.seats.get(i);
      if (s == null) continue;
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
    state.put("isHost", false);
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

    Room(String roomId) {
      this.roomId = roomId;
      for (int i = 0; i < MAX_SEATS; i++) seats.add(null);
    }
  }
}

