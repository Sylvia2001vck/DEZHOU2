package nebula.gateway;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import nebula.poker.GatewayApiRequest;
import nebula.poker.GatewayApiResponse;
import nebula.poker.GatewayClientEnvelope;
import nebula.poker.GatewayClientRegister;
import nebula.poker.GatewayClientUnregister;
import nebula.poker.GatewayDown;
import nebula.poker.GatewayToClientClose;
import nebula.poker.GatewayToClientEnvelope;
import nebula.poker.GatewayUp;

/**
 * One TCP connection to the C++ room worker (length-prefixed {@link GatewayDown} / {@link GatewayUp}).
 * Multiplexes browser WebSockets and HTTP API calls over that single link.
 */
public final class RoomWorkerBridge implements AutoCloseable {

  public interface ClientSink {
    void sendBinary(byte[] data);

    void close(int code);
  }

  private final String host;
  private final int port;
  private final AtomicBoolean running = new AtomicBoolean(true);
  private final AtomicLong rpcId = new AtomicLong(1);
  private final Map<Long, CompletableFuture<GatewayApiResponse>> pendingRpc = new ConcurrentHashMap<>();
  private final Map<String, ClientRegistration> clients = new ConcurrentHashMap<>();
  private final ExecutorService io = Executors.newSingleThreadExecutor(r -> {
    Thread t = new Thread(r, "room-worker-bridge");
    t.setDaemon(true);
    return t;
  });

  private volatile Socket socket;
  private volatile DataOutputStream out;

  public RoomWorkerBridge(String host, int port) {
    this.host = Objects.requireNonNull(host);
    this.port = port;
  }

  public void start() {
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
        sendDownUnsynchronized(
            GatewayDown.newBuilder()
                .setClientRegister(
                    GatewayClientRegister.newBuilder()
                        .setSocketId(reg.socketId)
                        .setCookieHeader(reg.cookieHeader == null ? "" : reg.cookieHeader)
                        .build())
                .build());
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
      GatewayUp up = GatewayUp.parseFrom(body);
      dispatchUp(up);
    }
  }

  private void dispatchUp(GatewayUp up) {
    switch (up.getPayloadCase()) {
      case TO_CLIENT_ENVELOPE -> deliverEnvelope(up.getToClientEnvelope());
      case TO_CLIENT_CLOSE -> deliverClose(up.getToClientClose());
      case API_RESPONSE -> completeRpc(up.getApiResponse());
      case PONG -> { /* optional heartbeat */ }
      case PAYLOAD_NOT_SET -> { }
    }
  }

  private void deliverEnvelope(GatewayToClientEnvelope m) {
    ClientRegistration reg = clients.get(m.getSocketId());
    if (reg == null) return;
    reg.sink.sendBinary(m.getEnvelope().toByteArray());
  }

  private void deliverClose(GatewayToClientClose m) {
    ClientRegistration reg = clients.remove(m.getSocketId());
    if (reg == null) return;
    reg.sink.close(m.getCloseCode());
  }

  private void completeRpc(GatewayApiResponse r) {
    CompletableFuture<GatewayApiResponse> f = pendingRpc.remove(r.getRequestId());
    if (f != null) f.complete(r);
  }

  public synchronized void registerClient(String socketId, String cookieHeader, ClientSink sink) throws IOException {
    clients.put(socketId, new ClientRegistration(socketId, cookieHeader, sink));
    if (out != null) {
      sendDownUnsynchronized(
          GatewayDown.newBuilder()
              .setClientRegister(
                  GatewayClientRegister.newBuilder()
                      .setSocketId(socketId)
                      .setCookieHeader(cookieHeader == null ? "" : cookieHeader)
                      .build())
              .build());
    }
  }

  public synchronized void unregisterClient(String socketId) throws IOException {
    clients.remove(socketId);
    if (out != null) {
      sendDownUnsynchronized(
          GatewayDown.newBuilder()
              .setClientUnregister(GatewayClientUnregister.newBuilder().setSocketId(socketId).build())
              .build());
    }
  }

  public synchronized void sendClientEnvelope(String socketId, byte[] envelope) throws IOException {
    if (out == null) throw new IOException("room worker offline");
    sendDownUnsynchronized(
        GatewayDown.newBuilder()
            .setClientEnvelope(
                GatewayClientEnvelope.newBuilder().setSocketId(socketId).setEnvelope(com.google.protobuf.ByteString.copyFrom(envelope)).build())
            .build());
  }

  public GatewayApiResponse apiProxy(String method, String uri, byte[] body, String cookieHeader, long timeoutMs)
      throws Exception {
    long id = rpcId.getAndIncrement();
    CompletableFuture<GatewayApiResponse> f = new CompletableFuture<>();
    pendingRpc.put(id, f);
    try {
      GatewayDown down =
          GatewayDown.newBuilder()
              .setApiRequest(
                  GatewayApiRequest.newBuilder()
                      .setRequestId(id)
                      .setMethod(method == null ? "GET" : method)
                      .setUri(uri == null ? "/" : uri)
                      .setBody(body == null ? com.google.protobuf.ByteString.EMPTY : com.google.protobuf.ByteString.copyFrom(body))
                      .setCookieHeader(cookieHeader == null ? "" : cookieHeader)
                      .build())
              .build();
      synchronized (this) {
        if (out == null) throw new IOException("room worker offline");
        sendDownUnsynchronized(down);
      }
      return f.get(timeoutMs, TimeUnit.MILLISECONDS);
    } finally {
      pendingRpc.remove(id, f);
    }
  }

  /** Caller must hold {@code synchronized (bridge)}. */
  private void sendDownUnsynchronized(GatewayDown down) throws IOException {
    byte[] payload = down.toByteArray();
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
    for (CompletableFuture<GatewayApiResponse> f : pendingRpc.values()) {
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

  private record ClientRegistration(String socketId, String cookieHeader, ClientSink sink) {}
}
