#pragma once

#include <array>
#include <cstddef>
#include <cstdint>
#include <iomanip>
#include <sstream>
#include <string>
#include <vector>

namespace nebula::sha256 {

namespace detail {

inline uint32_t rotr(uint32_t value, uint32_t bits) {
  return (value >> bits) | (value << (32U - bits));
}

inline uint32_t ch(uint32_t x, uint32_t y, uint32_t z) {
  return (x & y) ^ (~x & z);
}

inline uint32_t maj(uint32_t x, uint32_t y, uint32_t z) {
  return (x & y) ^ (x & z) ^ (y & z);
}

inline uint32_t big_sigma0(uint32_t x) {
  return rotr(x, 2U) ^ rotr(x, 13U) ^ rotr(x, 22U);
}

inline uint32_t big_sigma1(uint32_t x) {
  return rotr(x, 6U) ^ rotr(x, 11U) ^ rotr(x, 25U);
}

inline uint32_t small_sigma0(uint32_t x) {
  return rotr(x, 7U) ^ rotr(x, 18U) ^ (x >> 3U);
}

inline uint32_t small_sigma1(uint32_t x) {
  return rotr(x, 17U) ^ rotr(x, 19U) ^ (x >> 10U);
}

constexpr std::array<uint32_t, 64> kTable = {
    0x428a2f98U, 0x71374491U, 0xb5c0fbcfU, 0xe9b5dba5U, 0x3956c25bU, 0x59f111f1U, 0x923f82a4U,
    0xab1c5ed5U, 0xd807aa98U, 0x12835b01U, 0x243185beU, 0x550c7dc3U, 0x72be5d74U, 0x80deb1feU,
    0x9bdc06a7U, 0xc19bf174U, 0xe49b69c1U, 0xefbe4786U, 0x0fc19dc6U, 0x240ca1ccU, 0x2de92c6fU,
    0x4a7484aaU, 0x5cb0a9dcU, 0x76f988daU, 0x983e5152U, 0xa831c66dU, 0xb00327c8U, 0xbf597fc7U,
    0xc6e00bf3U, 0xd5a79147U, 0x06ca6351U, 0x14292967U, 0x27b70a85U, 0x2e1b2138U, 0x4d2c6dfcU,
    0x53380d13U, 0x650a7354U, 0x766a0abbU, 0x81c2c92eU, 0x92722c85U, 0xa2bfe8a1U, 0xa81a664bU,
    0xc24b8b70U, 0xc76c51a3U, 0xd192e819U, 0xd6990624U, 0xf40e3585U, 0x106aa070U, 0x19a4c116U,
    0x1e376c08U, 0x2748774cU, 0x34b0bcb5U, 0x391c0cb3U, 0x4ed8aa4aU, 0x5b9cca4fU, 0x682e6ff3U,
    0x748f82eeU, 0x78a5636fU, 0x84c87814U, 0x8cc70208U, 0x90befffaU, 0xa4506cebU, 0xbef9a3f7U,
    0xc67178f2U};

inline std::array<uint8_t, 32> digest_bytes(const std::string& input) {
  std::vector<uint8_t> data(input.begin(), input.end());
  const uint64_t bit_len = static_cast<uint64_t>(data.size()) * 8ULL;
  data.push_back(0x80U);
  while ((data.size() % 64U) != 56U) data.push_back(0U);
  for (int shift = 56; shift >= 0; shift -= 8) {
    data.push_back(static_cast<uint8_t>((bit_len >> shift) & 0xffU));
  }

  std::array<uint32_t, 8> hash = {
      0x6a09e667U, 0xbb67ae85U, 0x3c6ef372U, 0xa54ff53aU,
      0x510e527fU, 0x9b05688cU, 0x1f83d9abU, 0x5be0cd19U};

  std::array<uint32_t, 64> w{};
  for (std::size_t offset = 0; offset < data.size(); offset += 64U) {
    for (int i = 0; i < 16; ++i) {
      const std::size_t j = offset + static_cast<std::size_t>(i) * 4U;
      w[static_cast<std::size_t>(i)] = (static_cast<uint32_t>(data[j]) << 24U) |
                                       (static_cast<uint32_t>(data[j + 1U]) << 16U) |
                                       (static_cast<uint32_t>(data[j + 2U]) << 8U) |
                                       static_cast<uint32_t>(data[j + 3U]);
    }
    for (int i = 16; i < 64; ++i) {
      w[static_cast<std::size_t>(i)] = small_sigma1(w[static_cast<std::size_t>(i - 2)]) +
                                       w[static_cast<std::size_t>(i - 7)] +
                                       small_sigma0(w[static_cast<std::size_t>(i - 15)]) +
                                       w[static_cast<std::size_t>(i - 16)];
    }

    uint32_t a = hash[0];
    uint32_t b = hash[1];
    uint32_t c = hash[2];
    uint32_t d = hash[3];
    uint32_t e = hash[4];
    uint32_t f = hash[5];
    uint32_t g = hash[6];
    uint32_t h = hash[7];

    for (int i = 0; i < 64; ++i) {
      const uint32_t temp1 = h + big_sigma1(e) + ch(e, f, g) + kTable[static_cast<std::size_t>(i)] + w[static_cast<std::size_t>(i)];
      const uint32_t temp2 = big_sigma0(a) + maj(a, b, c);
      h = g;
      g = f;
      f = e;
      e = d + temp1;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2;
    }

    hash[0] += a;
    hash[1] += b;
    hash[2] += c;
    hash[3] += d;
    hash[4] += e;
    hash[5] += f;
    hash[6] += g;
    hash[7] += h;
  }

  std::array<uint8_t, 32> out{};
  for (std::size_t i = 0; i < hash.size(); ++i) {
    out[i * 4U] = static_cast<uint8_t>((hash[i] >> 24U) & 0xffU);
    out[i * 4U + 1U] = static_cast<uint8_t>((hash[i] >> 16U) & 0xffU);
    out[i * 4U + 2U] = static_cast<uint8_t>((hash[i] >> 8U) & 0xffU);
    out[i * 4U + 3U] = static_cast<uint8_t>(hash[i] & 0xffU);
  }
  return out;
}

}  // namespace detail

inline std::string hash(const std::string& input) {
  const auto bytes = detail::digest_bytes(input);
  std::ostringstream out;
  out << std::hex << std::setfill('0');
  for (uint8_t byte : bytes) out << std::setw(2) << static_cast<int>(byte);
  return out.str();
}

}  // namespace nebula::sha256
