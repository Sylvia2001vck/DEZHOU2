package com.nebula.leaderboard.application.service;

import com.nebula.leaderboard.application.port.in.IngestMatchResultUseCase;
import com.nebula.leaderboard.application.port.out.LeaderboardProjectionPort;
import com.nebula.leaderboard.application.port.out.MatchResultStorePort;
import com.nebula.leaderboard.domain.model.MatchResult;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class IngestMatchResultService implements IngestMatchResultUseCase {

  private final MatchResultStorePort store;
  private final LeaderboardProjectionPort projection;

  public IngestMatchResultService(MatchResultStorePort store, LeaderboardProjectionPort projection) {
    this.store = store;
    this.projection = projection;
  }

  @Override
  @Transactional
  public void ingest(MatchResult result) {
    if (result == null || result.matchId() == null || result.matchId().isBlank()) {
      throw new IllegalArgumentException("matchId is required");
    }
    if (store.existsByMatchId(result.matchId())) {
      return;
    }
    store.save(result);
    projection.apply(result);
  }
}
