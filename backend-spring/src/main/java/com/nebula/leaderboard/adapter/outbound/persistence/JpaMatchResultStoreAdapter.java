package com.nebula.leaderboard.adapter.outbound.persistence;

import com.nebula.leaderboard.application.port.out.MatchResultStorePort;
import com.nebula.leaderboard.domain.model.MatchResult;
import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Component;

@Component
public class JpaMatchResultStoreAdapter implements MatchResultStorePort {

  // Temporary in-memory fallback for skeleton stage.
  private final Set<String> seen = new HashSet<>();

  @Override
  public boolean existsByMatchId(String matchId) {
    return seen.contains(matchId);
  }

  @Override
  public void save(MatchResult result) {
    seen.add(result.matchId());
  }
}
