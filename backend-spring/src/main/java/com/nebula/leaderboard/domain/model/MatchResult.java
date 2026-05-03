package com.nebula.leaderboard.domain.model;

import java.time.Instant;
import java.util.List;

public record MatchResult(
    String matchId,
    String roomCode,
    Instant finishedAt,
    List<PlayerDelta> deltas) {

  public record PlayerDelta(long playerId, int scoreDelta) {}
}
