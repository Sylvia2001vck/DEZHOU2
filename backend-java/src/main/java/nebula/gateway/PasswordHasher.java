package nebula.gateway;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

final class PasswordHasher {
  private static final SecureRandom RNG = new SecureRandom();

  private PasswordHasher() {}

  static String randomSaltHex(int byteLen) {
    byte[] b = new byte[byteLen];
    RNG.nextBytes(b);
    return toHex(b);
  }

  static String hashPasswordRecord(String password, String salt) {
    return "v1$" + salt + "$120000$" + passwordDigest(password, salt, 120000);
  }

  static boolean verifyPasswordRecord(String password, String record) {
    int a = record.indexOf('$');
    if (a < 0) return false;
    int b = record.indexOf('$', a + 1);
    if (b < 0) return false;
    int c = record.indexOf('$', b + 1);
    if (c < 0) return false;
    String salt = record.substring(a + 1, b);
    int iterations;
    try {
      iterations = Integer.parseInt(record.substring(b + 1, c));
    } catch (NumberFormatException e) {
      return false;
    }
    if (iterations <= 0) return false;
    String expected = record.substring(c + 1);
    return passwordDigest(password, salt, iterations).equals(expected);
  }

  private static String passwordDigest(String password, String salt, int iterations) {
    String digest = sha256Hex(salt + ":" + password);
    for (int i = 1; i < iterations; i++) {
      digest = sha256Hex(digest + ":" + salt + ":" + password);
    }
    return digest;
  }

  static String sha256Hex(String input) {
    try {
      MessageDigest md = MessageDigest.getInstance("SHA-256");
      byte[] d = md.digest(input.getBytes(StandardCharsets.UTF_8));
      return toHex(d);
    } catch (NoSuchAlgorithmException e) {
      throw new IllegalStateException(e);
    }
  }

  private static String toHex(byte[] bytes) {
    StringBuilder sb = new StringBuilder(bytes.length * 2);
    for (byte b : bytes) {
      sb.append(String.format("%02x", b));
    }
    return sb.toString();
  }
}
