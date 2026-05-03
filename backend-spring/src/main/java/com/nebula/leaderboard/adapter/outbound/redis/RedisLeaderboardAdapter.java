package com.nebula.leaderboard.adapter.outbound.redis;

import com.nebula.leaderboard.application.port.out.LeaderboardProjectionPort;
import com.nebula.leaderboard.application.port.out.LeaderboardQueryPort;
import com.nebula.leaderboard.domain.model.LeaderboardEntry;
import com.nebula.leaderboard.domain.model.MatchResult;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ZSetOperations.TypedTuple;
import org.springframework.stereotype.Component;

@Component
public class RedisLeaderboardAdapter implements LeaderboardProjectionPort, LeaderboardQueryPort {

  private final StringRedisTemplate redis;

  public RedisLeaderboardAdapter(StringRedisTemplate redis) {
    this.redis = redis;
  }

  @Override
  public void apply(MatchResult result) {
    String key = "lb:current";
    for (MatchResult.PlayerDelta delta : result.deltas()) {
      redis.opsForZSet().incrementScore(key, String.valueOf(delta.playerId()), delta.scoreDelta());
    }
  }

  @Override
  public List<LeaderboardEntry> top(String season, int limit) {
    String key = "lb:" + season;
    Set<TypedTuple<String>> tuples = redis.opsForZSet().reverseRangeWithScores(key, 0, limit - 1);
    List<LeaderboardEntry> out = new ArrayList<>();
    if (tuples == null) return out;
    int rank = 1;
    for (TypedTuple<String> t : tuples) {
      long playerId = Long.parseLong(t.getValue());
      long score = t.getScore() == null ? 0L : t.getScore().longValue();
      out.add(new LeaderboardEntry(playerId, score, rank++));
    }
    return out;
  }
}
