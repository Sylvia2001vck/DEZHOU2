package nebula.gateway;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

final class FormUtil {
  private FormUtil() {}

  static Map<String, String> parseUrlEncoded(String raw) {
    if (raw == null || raw.isEmpty()) return Collections.emptyMap();
    Map<String, String> out = new HashMap<>();
    for (String pair : raw.split("&")) {
      if (pair.isEmpty()) continue;
      int eq = pair.indexOf('=');
      String k = urlDecode(eq < 0 ? pair : pair.substring(0, eq));
      String v = urlDecode(eq < 0 ? "" : pair.substring(eq + 1));
      if (!k.isEmpty()) out.put(k, v);
    }
    return out;
  }

  static String urlDecode(String s) {
    try {
      return URLDecoder.decode(s.replace("+", " "), StandardCharsets.UTF_8);
    } catch (Exception e) {
      return s;
    }
  }

  static String toFormBody(Map<String, String> fields) {
    StringBuilder sb = new StringBuilder();
    for (Map.Entry<String, String> e : fields.entrySet()) {
      if (sb.length() > 0) sb.append('&');
      sb.append(encode(e.getKey())).append('=').append(encode(e.getValue()));
    }
    return sb.toString();
  }

  private static String encode(String s) {
    return java.net.URLEncoder.encode(s == null ? "" : s, StandardCharsets.UTF_8);
  }
}
