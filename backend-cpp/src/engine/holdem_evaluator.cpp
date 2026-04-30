#include "engine/holdem_evaluator.hpp"

#include <algorithm>
#include <functional>
#include <map>
#include <string>
#include <vector>

namespace nebula::engine {
namespace {

std::vector<std::vector<Card>> combinations(const std::vector<Card>& arr, int k) {
  std::vector<std::vector<Card>> out;
  std::vector<Card> current;
  std::function<void(int)> dfs = [&](int start) {
    if (static_cast<int>(current.size()) == k) {
      out.push_back(current);
      return;
    }
    for (int i = start; i < static_cast<int>(arr.size()); ++i) {
      current.push_back(arr[i]);
      dfs(i + 1);
      current.pop_back();
    }
  };
  dfs(0);
  return out;
}

}  // namespace

HandEval evaluate5(const std::vector<Card>& cards) {
  std::vector<Card> sorted = cards;
  std::sort(sorted.begin(), sorted.end(), [](const Card& a, const Card& b) { return a.v > b.v; });

  std::vector<int> ranks;
  std::vector<std::string> suits;
  for (const auto& c : sorted) {
    ranks.push_back(c.v);
    suits.push_back(c.s);
  }

  bool flush = std::all_of(suits.begin(), suits.end(), [&](const std::string& s) { return s == suits.front(); });
  bool straight = false;
  int straight_max = 0;
  std::vector<int> uniq = ranks;
  std::sort(uniq.begin(), uniq.end());
  uniq.erase(std::unique(uniq.begin(), uniq.end()), uniq.end());
  std::sort(uniq.begin(), uniq.end(), std::greater<int>());
  if (uniq.size() == 5) {
    if (uniq.front() - uniq.back() == 4) {
      straight = true;
      straight_max = uniq.front();
    } else if (uniq == std::vector<int>({14, 5, 4, 3, 2})) {
      straight = true;
      straight_max = 5;
    }
  }

  std::map<int, int, std::greater<int>> counts;
  for (int r : ranks) counts[r] += 1;
  std::vector<std::pair<int, int>> by_freq;
  for (const auto& [rank, count] : counts) by_freq.push_back({count, rank});
  std::sort(by_freq.begin(), by_freq.end(), [](auto a, auto b) {
    if (a.first != b.first) return a.first > b.first;
    return a.second > b.second;
  });

  HandEval out;
  if (flush && straight) {
    out.rank = (straight_max == 14) ? 10 : 9;
    out.value = {straight_max};
    out.desc = (straight_max == 14) ? "Royal Flush" : "Straight Flush";
    return out;
  }
  if (by_freq[0].first == 4) {
    out.rank = 8;
    out.value = {by_freq[0].second, by_freq[1].second};
    out.desc = "Four of a Kind";
    return out;
  }
  if (by_freq[0].first == 3 && by_freq[1].first == 2) {
    out.rank = 7;
    out.value = {by_freq[0].second, by_freq[1].second};
    out.desc = "Full House";
    return out;
  }
  if (flush) {
    out.rank = 6;
    out.value = ranks;
    out.desc = "Flush";
    return out;
  }
  if (straight) {
    out.rank = 5;
    out.value = {straight_max};
    out.desc = "Straight";
    return out;
  }
  if (by_freq[0].first == 3) {
    out.rank = 4;
    out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second};
    out.desc = "Three of a Kind";
    return out;
  }
  if (by_freq[0].first == 2 && by_freq[1].first == 2) {
    out.rank = 3;
    out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second};
    out.desc = "Two Pair";
    return out;
  }
  if (by_freq[0].first == 2) {
    out.rank = 2;
    out.value = {by_freq[0].second, by_freq[1].second, by_freq[2].second, by_freq[3].second};
    out.desc = "One Pair";
    return out;
  }
  out.rank = 1;
  out.value = ranks;
  out.desc = "High Card";
  return out;
}

int compare_hands(const HandEval& a, const HandEval& b) {
  if (a.rank != b.rank) return a.rank - b.rank;
  for (size_t i = 0; i < std::min(a.value.size(), b.value.size()); ++i) {
    if (a.value[i] != b.value[i]) return a.value[i] - b.value[i];
  }
  return 0;
}

HandEval best_hand(const std::vector<Card>& cards) {
  auto combos = combinations(cards, 5);
  HandEval best;
  bool has_best = false;
  for (const auto& combo : combos) {
    HandEval current = evaluate5(combo);
    if (!has_best || compare_hands(current, best) > 0) {
      best = current;
      has_best = true;
    }
  }
  return best;
}

}  // namespace nebula::engine
