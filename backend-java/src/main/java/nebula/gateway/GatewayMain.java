package nebula.gateway;

import io.javalin.Javalin;
import io.javalin.config.JavalinConfig;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import io.javalin.http.staticfiles.Location;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;
import java.time.Duration;
import java.util.UUID;

/**
 * Public HTTP + WebSocket server. Auth and matchmaking are handled in Java; other {@code /api/*}
 * routes are proxied to the C++ room worker via {@link RoomWorkerBridge}. Browser WebSocket binary
 * frames are forwarded as-is. Java↔C++ control plane uses JSON+Base64.
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
    boolean bridgeDisabled = roomWorkerBridgeDisabled();
    Path repoRoot =
        Paths.get(env("NEBULA_REPO_ROOT", new File(".").getAbsolutePath())).toAbsolutePath().normalize();
    Path staticDir =
        env("NEBULA_STATIC_ROOT", "").isEmpty()
            ? repoRoot.resolve("frontend").resolve("static")
            : Paths.get(env("NEBULA_STATIC_ROOT", "")).toAbsolutePath().normalize();
    Files.createDirectories(staticDir);
    String staticRoot = staticDir.toString();
    syncProtoSocketJs(repoRoot, staticDir);

    NebulaRedis.init();

    MatchMessageDao matchDao = null;
    if (JdbcEnv.enabled()) {
      matchDao = new MatchMessageDao();
    }

    RoomWorkerBridge bridge = new RoomWorkerBridge(cppHost, cppPort, bridgeDisabled);
    bridge.start();

    AuthService auth = new AuthService(NebulaRedis.commands());
    MatchmakingService matchmaking = new MatchmakingService(auth, bridge, matchDao);
    EngineService engine = new EngineService(auth, bridge);
    BridgeHealthService bridgeHealth = new BridgeHealthService(bridge);
    BeanProgressService beanProgress = new BeanProgressService(auth);
    RoomControlWsService roomControl = new RoomControlWsService(auth);

    String bridgeSecret = env("NEBULA_BRIDGE_SECRET", "dev-bridge-secret-change-me");
    MatchWorker matchWorker = null;
    if (matchDao != null && NebulaRedis.available() && !bridgeDisabled) {
      matchWorker = new MatchWorker(matchDao, bridge, auth, bridgeSecret);
      matchWorker.start();
      System.err.println("[gateway] MatchWorker started (Redis + MYSQL_HOST: async match pipeline).");
    } else if (bridgeDisabled && matchDao != null && NebulaRedis.available()) {
      System.err.println(
          "[gateway] MatchWorker not started: C++ bridge disabled (async match needs room worker).");
    } else {
      System.err.println(
          "[gateway] MatchWorker not started (needs non-empty REDIS_HOST and MYSQL_HOST together). Sync match still OK.");
    }

    Javalin app =
        Javalin.create(
            config -> {
              config.showJavalinBanner = false;
              applyJettyWsIdleTimeout(config);
              config.staticFiles.add(staticFiles -> {
                staticFiles.hostedPath = "/";
                staticFiles.directory = staticRoot;
                staticFiles.location = Location.EXTERNAL;
              });
            });

    Handler api =
        ctx -> {
          String path = ctx.path();
          if (path.startsWith("/api/auth")) {
            auth.handle(ctx);
            return;
          }
          if (path.startsWith("/api/matchmaking")) {
            matchmaking.handle(ctx);
            return;
          }
          if (path.startsWith("/api/engine")) {
            engine.handle(ctx);
            return;
          }
          if (path.startsWith("/api/system/bridge-health")) {
            bridgeHealth.handle(ctx);
            return;
          }
          if (path.startsWith("/api/home/overview") || path.startsWith("/api/beans/")) {
            beanProgress.handle(ctx);
            return;
          }
          proxyApi(ctx, bridge, auth);
        };
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
                roomControl.onConnect(sid, ctx);
              });
          ws.onMessage(
              ctx -> {
                String sid = (String) ctx.attribute("nebulaSid");
                if (sid == null) return;
                try {
                  roomControl.onTextMessage(sid, ctx.message());
                } catch (Exception e) {
                  System.err.println("[ws] control message: " + e.getMessage());
                }
              });
          ws.onClose(
              ctx -> {
                String sid = (String) ctx.attribute("nebulaSid");
                if (sid == null) return;
                roomControl.onClose(sid);
              });
        });

    MatchWorker workerRef = matchWorker;
    Runtime.getRuntime()
        .addShutdownHook(
            new Thread(
                () -> {
                  if (workerRef != null) {
                    workerRef.shutdown();
                  }
                  roomControl.close();
                  bridge.close();
                  NebulaRedis.shutdown();
                }));
    app.start(httpPort);
    if (bridgeDisabled) {
      System.err.println("[gateway] listening on 0.0.0.0:" + httpPort + " (C++ room worker disabled)");
    } else {
      System.err.println("[gateway] listening on 0.0.0.0:" + httpPort + " -> C++ " + cppHost + ":" + cppPort);
    }
  }

  private static void proxyApi(Context ctx, RoomWorkerBridge bridge, AuthService auth) throws Exception {
    String pathOnly = ctx.path();
    if (bridge.roomWorkerDisabled() && ("/healthz".equals(pathOnly) || "/readyz".equals(pathOnly))) {
      ctx.status(200).contentType("text/plain; charset=utf-8").result("ok");
      return;
    }

    String uri = ctx.path();
    String qs = ctx.queryString();
    if (qs != null && !qs.isEmpty()) uri = uri + "?" + qs;
    String cookie = ctx.header("Cookie");
    byte[] body = ctx.bodyAsBytes();
    GatewayIdentity gid = auth.resolveFromCookie(cookie == null ? "" : cookie).orElse(null);
    long timeoutMs = ("/healthz".equals(ctx.path()) || "/readyz".equals(ctx.path())) ? 3_000 : 60_000;
    ApiProxyResult r =
        bridge.apiProxy(
            ctx.method().name(),
            uri,
            body,
            cookie == null ? "" : cookie,
            timeoutMs,
            gid);
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

  /**
   * Jetty WS policy idle timeout for the servlet factory (default {@value #DEFAULT_JETTY_WS_IDLE_MS}). Must exceed
   * proxy/CLB idle and heartbeat spacing; overrides Jetty defaults that could close tunnels too early behind CLB/nginx.
   */
  private static final long DEFAULT_JETTY_WS_IDLE_MS = 900_000L; // 15 min

  private static void applyJettyWsIdleTimeout(JavalinConfig config) {
    long idleMs = parseEnvUnsignedLong("NEBULA_JETTY_WS_IDLE_MS", DEFAULT_JETTY_WS_IDLE_MS);
    try {
      config.jetty.modifyWebSocketServletFactory(ws -> ws.setIdleTimeout(Duration.ofMillis(idleMs)));
      System.err.println(
          "[gateway] Jetty WebSocket policy idle timeout: "
              + idleMs
              + " ms (NEBULA_JETTY_WS_IDLE_MS; app heartbeats/proxy timeouts should remain below upstream idle).");
    } catch (RuntimeException e) {
      System.err.println("[gateway] Jetty WebSocket idle timeout config failed (continuing): " + e.getMessage());
    }
  }

  private static long parseEnvUnsignedLong(String key, long defaultMs) {
    String v = System.getenv(key);
    if (v == null || v.isBlank()) return defaultMs;
    try {
      long n = Long.parseLong(v.trim());
      if (n <= 0) {
        System.err.println("[gateway] Invalid " + key + "=\"" + v + "\" (need > 0); using default " + defaultMs);
        return defaultMs;
      }
      return n;
    } catch (NumberFormatException e) {
      System.err.println("[gateway] Invalid " + key + "=\"" + v + "\"; using default " + defaultMs);
      return defaultMs;
    }
  }

  /** When set to 1/true/yes, no TCP bridge to C++; /healthz and /readyz are served by Java only. */
  private static boolean roomWorkerBridgeDisabled() {
    String v = System.getenv("NEBULA_ROOM_WORKER_DISABLED");
    if (v == null || v.isEmpty()) return false;
    String s = v.trim().toLowerCase();
    return s.equals("1") || s.equals("true") || s.equals("yes");
  }

  /** Single source at {@code repoRoot/proto-socket.js} → served from static dir each boot (fixes stale bundles). */
  private static void syncProtoSocketJs(Path repoRoot, Path staticDir) {
    Path canonical = repoRoot.resolve("proto-socket.js").normalize();
    Path served = staticDir.resolve("proto-socket.js").normalize();
    try {
      if (!Files.exists(canonical)) {
        System.err.println(
            "[gateway] proto-socket.js: canonical file missing at "
                + canonical
                + " (upgrade image or rebuild; static may be stale)");
        appendBb2dd5(repoRoot, "H-SYNC", "canonical_missing", canonical.toString());
        return;
      }
      Files.createDirectories(staticDir);
      Files.copy(canonical, served, StandardCopyOption.REPLACE_EXISTING);
      long nb = Files.size(served);
      String head =
          Files.lines(served, StandardCharsets.UTF_8).findFirst().orElse("(empty)");
      String headBrief = head.length() > 180 ? head.substring(0, 180) + "…" : head;
      System.err.println(
          "[gateway] proto-socket.js synced " + canonical + " → " + served + " (" + nb + " bytes)");
      System.err.println("[gateway] proto-socket.js first line: " + headBrief);
      appendBb2dd5Synced(repoRoot, served, canonical, nb, headBrief);
    } catch (Exception e) {
      System.err.println("[gateway] proto-socket.js sync failed: " + e.getMessage());
      appendBb2dd5(repoRoot, "H-SYNC", "sync_failed", e.getClass().getSimpleName());
    }
  }

  /** Best-effort NDJSON for Cursor debug ingest file when repoRoot is writable (bind-mounted dev). */
  private static void appendBb2dd5Synced(Path repoRoot, Path served, Path canonical, long bytes, String headBrief) {
    try {
      long ts = System.currentTimeMillis();
      String escHead = bb2Escape(headBrief);
      String escCanon = bb2Escape(canonical.toString());
      String escServed = bb2Escape(served.toString());
      String line =
          "{\"sessionId\":\"bb2dd5\",\"hypothesisId\":\"H-SYNC\",\"location\":\"GatewayMain.syncProtoSocketJs\","
              + "\"message\":\"proto_socket_synced\",\"data\":{\"canonical\":\""
              + escCanon
              + "\",\"served\":\""
              + escServed
              + "\",\"bytes\":"
              + bytes
              + ",\"head\":\""
              + escHead
              + "\"},\"timestamp\":"
              + ts
              + "}\n";
      Files.writeString(
          repoRoot.resolve("debug-bb2dd5.log"),
          line,
          StandardCharsets.UTF_8,
          StandardOpenOption.CREATE,
          StandardOpenOption.APPEND);
    } catch (Exception ignored) {
    }
  }

  private static void appendBb2dd5(Path repoRoot, String hypothesisId, String message, String detail) {
    try {
      long ts = System.currentTimeMillis();
      String esc = bb2Escape(detail);
      String line =
          "{\"sessionId\":\"bb2dd5\",\"hypothesisId\":\""
              + hypothesisId
              + "\",\"location\":\"GatewayMain\",\"message\":\""
              + message
              + "\",\"data\":{\"detail\":\""
              + esc
              + "\"},\"timestamp\":"
              + ts
              + "}\n";
      Files.writeString(
          repoRoot.resolve("debug-bb2dd5.log"),
          line,
          StandardCharsets.UTF_8,
          StandardOpenOption.CREATE,
          StandardOpenOption.APPEND);
    } catch (Exception ignored) {
    }
  }

  private static String bb2Escape(String s) {
    if (s == null) return "";
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (c == '\\') {
        sb.append("\\\\");
      } else if (c == '"') {
        sb.append("\\\"");
      } else if (c < 32 && c != '\t') {
        sb.append(' ');
      } else {
        sb.append(c);
      }
    }
    return sb.toString();
  }

}
