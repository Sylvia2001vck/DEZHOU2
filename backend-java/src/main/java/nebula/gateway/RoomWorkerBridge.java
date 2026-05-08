package nebula.gateway;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;

/**
 * One TCP connection to the C++ worker (length-prefixed UTF-8 JSON frames; binary fields Base64).
 * Multiplexes browser WebSockets and HTTP API calls over that single link. No Protobuf on the Java side.
 */
public final class RoomWorkerBridge implements AutoCloseable {

  private static final byte[] BODY_DISABLED_JSON =
      "{\"ok\":false,\"message\":\"C++ room worker disabled (set NEBULA_ROOM_WORKER_DISABLED unset to enable)\"}"
          .getBytes(StandardCharsets.UTF_8);

  public interface ClientSink {
    void sendBinary(byte[] data);

    void close(int code);
  }

  private final String host;
  private final int port;
  private final boolean disabled;
  private final AtomicBoolean running = new AtomicBoolean(true);
  private final AtomicLong rpcId = new AtomicLong(1);
  private final Map<Long, CompletableFuture<ApiProxyResult>> pendingRpc = new ConcurrentHashMap<>();
  private final Map<String, ClientRegistration> clients = new ConcurrentHashMap<>();
  private final ExecutorService io = Executors.newSingleThreadExecutor(r -> {
    Thread t = new Thread(r, "room-worker-bridge");
    t.setDaemon(true);
    return t;
  });

  private volatile Socket socket;
  private volatile DataOutputStream out;

  public RoomWorkerBridge(String host, int port) {
    this(host, port, false);
  }

  public RoomWorkerBridge(String host, int port, boolean disabled) {
    this.host = Objects.requireNonNull(host);
    this.port = port;
    this.disabled = disabled;
  }

  /** When true: no TCP to C++; {@link #apiProxy} returns 503; health checks use Java-local handlers in {@code GatewayMain}. */
  public boolean roomWorkerDisabled() {
    return disabled;
  }

  public void start() {
    if (disabled) {
      System.err.println("[bridge] room worker disabled (NEBULA_ROOM_WORKER_DISABLED)");
      return;
    }
    io.submit(this::runLoop);
  }

  private void runLoop() {
    while (running.get()) {
      try {
        connectOnce();
        readLoop();
      } catch (Exception e) {
        System.err.println("[bridge] disconnected: " + e.getMessage());
      } finally {
        closeSocketQuietly();
      }
      if (!running.get()) break;
      try {
        Thread.sleep(1000);
      } catch (InterruptedException ie) {
        Thread.currentThread().interrupt();
        break;
      }
    }
  }

  private void connectOnce() throws IOException {
    Socket s = new Socket();
    s.connect(new InetSocketAddress(host, port), 10_000);
    s.setTcpNoDelay(true);
    System.err.println("[bridge] connected to C++ room worker " + host + ":" + port);
    synchronized (this) {
      this.socket = s;
      this.out = new DataOutputStream(s.getOutputStream());
      for (ClientRegistration reg : clients.values()) {
        sendDownUnsynchronized(clientRegisterJson(reg.socketId, reg.cookieHeader, reg.gatewayIdentity));
      }
    }
  }

  private void readLoop() throws IOException {
    DataInputStream in = new DataInputStream(socket.getInputStream());
    while (running.get()) {
      int len = in.readInt();
      if (len <= 0 || len > 32 * 1024 * 1024) {
        throw new IOException("invalid frame length " + len);
      }
      byte[] body = new byte[len];
      in.readFully(body);
      String utf8 = new String(body, StandardCharsets.UTF_8);
      JsonObject msg = JsonParser.parseString(utf8).getAsJsonObject();
      dispatchUp(msg);
    }
  }

  private void dispatchUp(JsonObject msg) {
    String type = msg.has("type") ? msg.get("type").getAsString() : "";
    switch (type) {
      case "to_client_envelope" -> deliverEnvelope(msg);
      case "to_client_close" -> deliverClose(msg);
      case "api_response" -> completeRpc(msg);
      case "pong" -> { /* optional heartbeat */ }
      default -> { }
    }
  }

  private void deliverEnvelope(JsonObject m) {
    String socketId = m.has("socket_id") ? m.get("socket_id").getAsString() : "";
    ClientRegistration reg = clients.get(socketId);
    if (reg == null) return;
    String b64 = m.has("envelope_b64") ? m.get("envelope_b64").getAsString() : "";
    reg.sink.sendBinary(Base64.getDecoder().decode(b64));
  }

  private void deliverClose(JsonObject m) {
    String socketId = m.has("socket_id") ? m.get("socket_id").getAsString() : "";
    ClientRegistration reg = clients.remove(socketId);
    if (reg == null) return;
    int code = m.has("close_code") ? m.get("close_code").getAsInt() : 1000;
    reg.sink.close(code);
  }

  private void completeRpc(JsonObject r) {
    long reqId = jsonLong(r.get("request_id"));
    CompletableFuture<ApiProxyResult> f = pendingRpc.remove(reqId);
    if (f == null) return;
    int status = r.has("status") ? r.get("status").getAsInt() : 500;
    String ct = r.has("content_type") ? r.get("content_type").getAsString() : "text/plain; charset=utf-8";
    String bodyB64 = r.has("body_b64") ? r.get("body_b64").getAsString() : "";
    String setCk = r.has("set_cookie_header") ? r.get("set_cookie_header").getAsString() : "";
    byte[] body = bodyB64.isEmpty() ? new byte[0] : Base64.getDecoder().decode(bodyB64);
    f.complete(new ApiProxyResult(status, ct, body, setCk));
  }

  private static long jsonLong(JsonElement e) {
    if (e == null || e.isJsonNull()) return 0L;
    try {
      return e.getAsLong();
    } catch (Exception ex) {
      try {
        return e.getAsJsonPrimitive().getAsBigInteger().longValue();
      } catch (Exception ex2) {
        return 0L;
      }
    }
  }

  public synchronized void registerClient(
      String socketId, String cookieHeader, GatewayIdentity gatewayIdentity, ClientSink sink) throws IOException {
    clients.put(socketId, new ClientRegistration(socketId, cookieHeader, gatewayIdentity, sink));
    if (out != null) {
      sendDownUnsynchronized(clientRegisterJson(socketId, cookieHeader, gatewayIdentity));
    }
  }

  public synchronized void unregisterClient(String socketId) throws IOException {
    clients.remove(socketId);
    if (out != null) {
      sendDownUnsynchronized(clientUnregisterJson(socketId));
    }
  }

  public synchronized void sendClientEnvelope(String socketId, byte[] envelope) throws IOException {
    if (out == null) throw new IOException("room worker offline");
    sendDownUnsynchronized(clientEnvelopeJson(socketId, envelope));
  }

  public ApiProxyResult apiProxy(String method, String uri, byte[] body, String cookieHeader, long timeoutMs)
      throws Exception {
    return apiProxy(method, uri, body, cookieHeader, timeoutMs, null);
  }

  public ApiProxyResult apiProxy(
      String method, String uri, byte[] body, String cookieHeader, long timeoutMs, GatewayIdentity gatewayIdentity)
      throws Exception {
    if (disabled) {
      return new ApiProxyResult(503, "application/json; charset=utf-8", BODY_DISABLED_JSON, "");
    }
    long id = rpcId.getAndIncrement();
    CompletableFuture<ApiProxyResult> f = new CompletableFuture<>();
    pendingRpc.put(id, f);
    try {
      String down = apiRequestJson(id, method, uri, body, cookieHeader, gatewayIdentity);
      synchronized (this) {
        if (out == null) throw new IOException("room worker offline");
        sendDownUnsynchronized(down);
      }
      return f.get(timeoutMs, TimeUnit.MILLISECONDS);
    } finally {
      pendingRpc.remove(id, f);
    }
  }

  private static String clientRegisterJson(String socketId, String cookieHeader, GatewayIdentity gatewayIdentity) {
    JsonObject o = new JsonObject();
    o.addProperty("type", "client_register");
    o.addProperty("socket_id", socketId);
    o.addProperty("cookie_header", cookieHeader == null ? "" : cookieHeader);
    if (gatewayIdentity != null && gatewayIdentity.userId > 0) {
      o.addProperty("gateway_user_id", gatewayIdentity.userId);
      o.addProperty("gateway_login_username", gatewayIdentity.loginUsername);
      o.addProperty("gateway_profile_b64", gatewayIdentity.profileB64);
    }
    return o.toString();
  }

  private static String clientUnregisterJson(String socketId) {
    JsonObject o = new JsonObject();
    o.addProperty("type", "client_unregister");
    o.addProperty("socket_id", socketId);
    return o.toString();
  }

  private static String clientEnvelopeJson(String socketId, byte[] envelope) {
    JsonObject o = new JsonObject();
    o.addProperty("type", "client_envelope");
    o.addProperty("socket_id", socketId);
    o.addProperty("envelope_b64", Base64.getEncoder().encodeToString(envelope == null ? new byte[0] : envelope));
    return o.toString();
  }

  private static String apiRequestJson(
      long requestId, String method, String uri, byte[] body, String cookieHeader, GatewayIdentity gatewayIdentity) {
    JsonObject o = new JsonObject();
    o.addProperty("type", "api_request");
    o.addProperty("request_id", requestId);
    o.addProperty("method", method == null ? "GET" : method);
    o.addProperty("uri", uri == null ? "/" : uri);
    o.addProperty(
        "body_b64",
        Base64.getEncoder().encodeToString(body == null ? new byte[0] : body));
    o.addProperty("cookie_header", cookieHeader == null ? "" : cookieHeader);
    if (gatewayIdentity != null && gatewayIdentity.userId > 0) {
      o.addProperty("gateway_user_id", gatewayIdentity.userId);
      o.addProperty("gateway_login_username", gatewayIdentity.loginUsername);
      o.addProperty("gateway_profile_b64", gatewayIdentity.profileB64);
    }
    return o.toString();
  }

  /** Caller must hold {@code synchronized (bridge)}. */
  private void sendDownUnsynchronized(String jsonUtf8) throws IOException {
    byte[] payload = jsonUtf8.getBytes(StandardCharsets.UTF_8);
    out.writeInt(payload.length);
    out.write(payload);
    out.flush();
  }

  private void closeSocketQuietly() {
    synchronized (this) {
      try {
        if (socket != null) socket.close();
      } catch (IOException ignored) {
      }
      socket = null;
      out = null;
    }
    for (CompletableFuture<ApiProxyResult> f : pendingRpc.values()) {
      f.completeExceptionally(new IOException("room worker disconnected"));
    }
    pendingRpc.clear();
  }

  @Override
  public void close() {
    running.set(false);
    closeSocketQuietly();
    io.shutdownNow();
  }

  private record ClientRegistration(
      String socketId, String cookieHeader, GatewayIdentity gatewayIdentity, ClientSink sink) {}
}
