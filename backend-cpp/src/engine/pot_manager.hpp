#pragma once

#include <vector>

namespace nebula::engine {

struct PotContributor {
  int seat_idx = -1;
  int committed = 0;
  bool showdown_eligible = false;
};

struct Pot {
  int cap = 0;
  int amount = 0;
  std::vector<int> eligible_seat_indices;
};

std::vector<Pot> build_pots(const std::vector<PotContributor>& contributors);

}  // namespace nebula::engine
