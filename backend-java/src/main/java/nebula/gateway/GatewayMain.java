package nebula.gateway;

import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.UUID;

/**
 * Public HTTP + WebSocket server. Forwards REST and binary game frames to the C++ room worker via
 * {@link RoomWorkerBridge} (no WebSocket stack in C++). Java uses JSON+Base64 on the bridge, not Protobuf.
 */
public final class GatewayMain {

  public static void main(String[] args) throws Exception {
    // #region agent log
    try {
      Path logPath =
          Path.of(System.getenv().getOrDefault("NEBULA_REPO_ROOT", System.getProperty("user.dir", ".")))
              .resolve("debug-a49bab.log");
      String line =
          "{\"sessionId\":\"a49bab\",\"hypothesisId\":\"H-bridge\",\"location\":\"GatewayMain.main\","
              + "\"message\":\"gateway_main_start\",\"timestamp\":"
              + System.currentTimeMillis()
              + "}\n";
      Files.writeString(logPath, line, StandardCharsets.UTF_8, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
    } catch (Exception ignored) {
    }
    // #endregion

    String cppHost = env("NEBULA_ROOM_WORKER_HOST", "127.0.0.1");
    int cppPort = Integer.parseInt(env("NEBULA_ROOM_WORKER_PORT", "3101"));
    int httpPort = Integer.parseInt(env("PORT", "3000"));
    Path repoRoot =
        Paths.get(env("NEBULA_REPO_ROOT", new File(".").getAbsolutePath())).toAbsolutePath().normalize();
    Path staticDir =
        env("NEBULA_STATIC_ROOT", "").isEmpty()
            ? repoRoot.resolve("frontend").resolve("static")
            : Paths.get(env("NEBULA_STATIC_ROOT", "")).toAbsolutePath().normalize();
    Files.createDirectories(staticDir);
    String staticRoot = staticDir.toString();

    RoomWorkerBridge bridge = new RoomWorkerBridge(cppHost, cppPort);
    bridge.start();

    Javalin app =
        Javalin.create(
            config -> {
              config.showJavalinBanner = false;
              config.staticFiles.add(staticFiles -> {
                staticFiles.hostedPath = "/";
                staticFiles.directory = staticRoot;
              });
            });

    Handler api = ctx -> proxyApi(ctx, bridge);
    app.get("/api/*", api);
    app.post("/api/*", api);
    app.put("/api/*", api);
    app.patch("/api/*", api);
    app.delete("/api/*", api);
    app.head("/api/*", api);
    app.options("/api/*", api);
    app.get("/healthz", api);
    app.get("/readyz", api);

    app.ws(
        "/ws",
        ws -> {
          ws.onConnect(
              ctx -> {
                String sid = "ws-" + UUID.randomUUID().toString().replace("-", "");
                ctx.attribute("nebulaSid", sid);
                String cookie = ctx.header("Cookie");
                try {
                  bridge.registerClient(sid, cookie == null ? "" : cookie, new BridgeSink(ctx));
                } catch (Exception e) {
                  System.err.println("[ws] register failed: " + e.getMessage());
                  ctx.attribute("nebulaSid", null);
                  ctx.closeSession(1011, "room worker offline");
                }
              });
          ws.onBinaryMessage(
              ctx -> {
                String sid = (String) ctx.attribute("nebulaSid");
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
                String sid = (String) ctx.attribute("nebulaSid");
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
    ApiProxyResult r =
        bridge.apiProxy(ctx.method().name(), uri, body, cookie == null ? "" : cookie, 60_000);
    ctx.status(r.getStatus());
    if (!r.getContentType().isEmpty()) {
      ctx.contentType(r.getContentType());
    }
    if (!r.getSetCookieHeader().isEmpty()) {
      ctx.header("Set-Cookie", r.getSetCookieHeader());
    }
    byte[] rb = r.getBody();
    ctx.result(rb.length == 0 ? "" : new String(rb, StandardCharsets.UTF_8));
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
