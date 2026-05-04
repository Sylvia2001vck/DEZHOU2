package nebula.gateway;

import io.javalin.http.Context;
import java.nio.charset.StandardCharsets;

/** Lightweight runtime health check for Java gateway <-> C++ room worker connectivity. */
public final class BridgeHealthService {
  private final RoomWorkerBridge bridge;

  public BridgeHealthService(RoomWorkerBridge bridge) {
    this.bridge = bridge;
  }

  public void handle(Context ctx) {
    if (!"GET".equals(ctx.method().name())) {
      ctx.status(405).result("Method Not Allowed");
      return;
    }
    String path = ctx.path();
    if (!"/api/system/bridge-health".equals(path)) {
      ctx.status(404).result("Not Found");
      return;
    }
    try {
      ApiProxyResult r = bridge.apiProxy("GET", "/readyz", new byte[0], "", 5000, null);
      boolean ok = r.getStatus() >= 200 && r.getStatus() < 300;
      String upstream = r.getBody() == null ? "" : new String(r.getBody(), StandardCharsets.UTF_8);
      json(
          ctx,
          ok ? 200 : 503,
          "{\"ok\":"
              + ok
              + ",\"cppStatus\":"
              + r.getStatus()
              + ",\"cppReadyz\":"
              + quoteJson(upstream)
              + "}");
    } catch (Exception e) {
      json(
          ctx,
          503,
          "{\"ok\":false,\"message\":\"Bridge check failed\",\"error\":"
              + quoteJson(e.getMessage() == null ? "unknown" : e.getMessage())
              + "}");
    }
  }

  private static void json(Context ctx, int status, String body) {
    ctx.status(status);
    ctx.contentType("application/json; charset=utf-8");
    ctx.result(body);
  }

  private static String quoteJson(String s) {
    String v = s == null ? "" : s;
    return "\"" + v.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "\\r") + "\"";
  }
}

