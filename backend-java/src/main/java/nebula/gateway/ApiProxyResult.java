package nebula.gateway;

import java.nio.charset.StandardCharsets;

/** HTTP response returned from the C++ worker for a proxied API call (JSON gateway wire, no Protobuf). */
public final class ApiProxyResult {
  private final int status;
  private final String contentType;
  private final byte[] body;
  private final String setCookieHeader;

  public ApiProxyResult(int status, String contentType, byte[] body, String setCookieHeader) {
    this.status = status;
    this.contentType = contentType == null ? "" : contentType;
    this.body = body == null ? new byte[0] : body;
    this.setCookieHeader = setCookieHeader == null ? "" : setCookieHeader;
  }

  public int getStatus() {
    return status;
  }

  public String getContentType() {
    return contentType;
  }

  public byte[] getBody() {
    return body;
  }

  public String bodyString() {
    return new String(body, StandardCharsets.UTF_8);
  }

  public String getSetCookieHeader() {
    return setCookieHeader;
  }
}
