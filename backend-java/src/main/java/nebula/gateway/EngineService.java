package nebula.gateway;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.javalin.http.Context;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

/**
 * Java-facing entry for pure C++ poker engine APIs.
 *
 * <p>This is the first step of "Java authoritative state, C++ pure compute": Java receives engine
 * compute requests and forwards only stateless calculation payloads to C++.
 */
public final class EngineService {
  private final AuthService auth;
  private final RoomWorkerBridge bridge;

  public EngineService(AuthService auth, RoomWorkerBridge bridge) {
    this.auth = auth;
    this.bridge = bridge;
  }

  public void handle(Context ctx) throws Exception {
    String method = ctx.method().name();
    String path = ctx.path();
    if (!"POST".equals(method)) {
      json(ctx, 405, "{\"ok\":false,\"message\":\"Method Not Allowed\"}");
      return;
    }
    if (!"/api/engine/best-hand".equals(path) && !"/api/engine/showdown".equals(path)) {
      json(ctx, 404, "{\"ok\":false,\"message\":\"Not Found\"}");
      return;
    }

    String cookie = Optional.ofNullable(ctx.header("Cookie")).orElse("");
    GatewayIdentity gid = auth.resolveFromCookie(cookie).orElse(null);
    if (gid == null || gid.userId <= 0) {
      json(ctx, 401, "{\"ok\":false,\"message\":\"Login required.\"}");
      return;
    }

    // Validate payload at Java layer to fail fast before touching C++.
    JsonElement bodyJson;
    try {
      bodyJson = JsonParser.parseString(ctx.body() == null || ctx.body().isBlank() ? "{}" : ctx.body());
    } catch (Exception e) {
      json(ctx, 400, "{\"ok\":false,\"message\":\"Bad JSON\"}");
      return;
    }
    if (!bodyJson.isJsonObject()) {
      json(ctx, 400, "{\"ok\":false,\"message\":\"JSON object expected\"}");
      return;
    }

    ApiProxyResult result =
        bridge.apiProxy(
            method,
            path,
            bodyJson.toString().getBytes(StandardCharsets.UTF_8),
            cookie,
            60_000,
            gid);
    ctx.status(result.getStatus());
    if (!result.getContentType().isEmpty()) {
      ctx.contentType(result.getContentType());
    }
    byte[] rb = result.getBody();
    ctx.result(rb.length == 0 ? "" : new String(rb, StandardCharsets.UTF_8));
  }

  private static void json(Context ctx, int status, String body) {
    ctx.status(status);
    ctx.contentType("application/json; charset=utf-8");
    ctx.result(body);
  }
}
