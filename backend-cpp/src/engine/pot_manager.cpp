#include "engine/pot_manager.hpp"

#include <algorithm>
#include <set>
#include <vector>

namespace nebula::engine {

std::vector<Pot> build_pots(const std::vector<PotContributor>& contributors) {
  std::set<int> caps;
  for (const auto& c : contributors) {
    if (c.committed > 0) caps.insert(c.committed);
  }

  std::vector<Pot> pots;
  int previous_cap = 0;
  for (int cap : caps) {
    const int slice = cap - previous_cap;
    if (slice <= 0) continue;

    int contributor_count = 0;
    std::vector<int> eligible;
    for (const auto& c : contributors) {
      if (c.committed < cap) continue;
      contributor_count += 1;
      if (c.showdown_eligible) eligible.push_back(c.seat_idx);
    }

    const int amount = slice * contributor_count;
    if (amount > 0) {
      pots.push_back(Pot{cap, amount, eligible});
    }
    previous_cap = cap;
  }

  return pots;
}

}  // namespace nebula::engine
