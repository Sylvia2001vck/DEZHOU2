package com.nebula.leaderboard.application.port.out;

import com.nebula.leaderboard.domain.model.MatchResult;

public interface MatchResultStorePort {
  boolean existsByMatchId(String matchId);

  void save(MatchResult result);
}
