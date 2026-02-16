// Climbing Stairs

function climbingStairs(n, dp) {
  if (n <= 1) {
    return 1;
  }

  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = climbingStairs(n - 1, dp) + climbingStairs(n - 2, dp);

  return dp[n];
}
