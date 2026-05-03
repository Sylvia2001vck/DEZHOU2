package com.nebula.leaderboard.domain.model;

public record LeaderboardEntry(long playerId, long score, int rank) {}
