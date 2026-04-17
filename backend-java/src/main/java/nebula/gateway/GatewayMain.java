package nebula.gateway;

import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.HandlerType;
import java.io.File;
import java.util.Arrays;
import java.util.EnumSet;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import nebula.poker.GatewayApiResponse;

/**
 * Public HTTP + WebSocket server. Forwards REST and binary game frames to the C++ room worker via
 * {@link RoomWorkerBridge} (no WebSocket stack in C++).
 */
public final class GatewayMain {

  public static void main(String[] args) throws Exception {
    String cppHost = env("NEBULA_ROOM_WORKER_HOST", "127.0.0.1");
    int cppPort = Integer.parseInt(env("NEBULA_ROOM_WORKER_PORT", "3101"));
    int httpPort = Integer.parseInt(env("PORT", "3000"));
    String staticRoot = env("NEBULA_REPO_ROOT", new File(".").getAbsolutePath());

    RoomWorkerBridge bridge = new RoomWorkerBridge(cppHost, cppPort);
    bridge.start();

    final ConcurrentHashMap<String, String> jettySessionToSocketId = new ConcurrentHashMap<>();

    Javalin app =
        Javalin.create(
            config -> {
              config.showJavalinBanner = false;
              config.staticFiles.add(staticFiles -> {
                staticFiles.hostedPath = "/";
                staticFiles.directory = staticRoot;
              });
            });

    EnumSet<HandlerType> apiMethods =
        EnumSet.of(HandlerType.GET, HandlerType.POST, HandlerType.PUT, HandlerType.DELETE, HandlerType.PATCH, HandlerType.HEAD);
    for (HandlerType ht : apiMethods) {
      app.addHandler(ht, "/api/*", ctx -> proxyApi(ctx, bridge));
    }
    app.get("/healthz", ctx -> proxyApi(ctx, bridge));
    app.get("/readyz", ctx -> proxyApi(ctx, bridge));

    app.ws(
        "/ws",
        ws -> {
          ws.onConnect(
              ctx -> {
                String sid = "ws-" + UUID.randomUUID().toString().replace("-", "");
                jettySessionToSocketId.put(ctx.getSessionId(), sid);
                String cookie = ctx.header("Cookie");
                try {
                  bridge.registerClient(sid, cookie == null ? "" : cookie, new BridgeSink(ctx));
                } catch (Exception e) {
                  System.err.println("[ws] register failed: " + e.getMessage());
                  jettySessionToSocketId.remove(ctx.getSessionId());
                  ctx.closeSession(1011, "room worker offline");
                }
              });
          ws.onBinaryMessage(
              ctx -> {
                String sid = jettySessionToSocketId.get(ctx.getSessionId());
                if (sid == null) return;
                try {
                  byte[] raw = ctx.data();
                  byte[] bin =
                      Arrays.copyOfRange(raw, ctx.offset(), ctx.offset() + ctx.length());
                  bridge.sendClientEnvelope(sid, bin);
                } catch (Exception e) {
                  System.err.println("[ws] envelope: " + e.getMessage());
                  ctx.closeSession(1011, "room worker error");
                }
              });
          ws.onClose(
              ctx -> {
                String sid = jettySessionToSocketId.remove(ctx.getSessionId());
                if (sid == null) return;
                try {
                  bridge.unregisterClient(sid);
                } catch (Exception ignored) {
                }
              });
        });

    Runtime.getRuntime().addShutdownHook(new Thread(bridge::close));
    app.start(httpPort);
    System.err.println("[gateway] listening on 0.0.0.0:" + httpPort + " → C++ " + cppHost + ":" + cppPort);
  }

  private static void proxyApi(Context ctx, RoomWorkerBridge bridge) throws Exception {
    String uri = ctx.path();
    String qs = ctx.queryString();
    if (qs != null && !qs.isEmpty()) uri = uri + "?" + qs;
    String cookie = ctx.header("Cookie");
    byte[] body = ctx.bodyAsBytes();
    GatewayApiResponse r =
        bridge.apiProxy(ctx.method().name(), uri, body, cookie == null ? "" : cookie, 60_000);
    ctx.status(r.getStatus());
    if (!r.getContentType().isEmpty()) {
      ctx.contentType(r.getContentType());
    }
    if (!r.getSetCookieHeader().isEmpty()) {
      ctx.header("Set-Cookie", r.getSetCookieHeader());
    }
    ctx.result(r.getBody().isEmpty() ? "" : r.getBody().toStringUtf8());
  }

  private static String env(String k, String dflt) {
    String v = System.getenv(k);
    return v == null || v.isEmpty() ? dflt : v;
  }

  private record BridgeSink(io.javalin.websocket.WsContext ctx) implements RoomWorkerBridge.ClientSink {
    @Override
    public void sendBinary(byte[] data) {
      ctx.send(data);
    }

    @Override
    public void close(int code) {
      ctx.closeSession(code, "closed by room worker");
    }
  }
}
