class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    if (n <= 0) {
      return [];
    }

    const dp = new Array(n + 1).fill(null).map(() => new Set());
    dp[0].add('');

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        for (const left of dp[j]) {
          for (const right of dp[i - 1 - j]) {
            dp[i].add(`(${left})${right}`);
          }
        }
      }
    }

    return Array.from(dp[n]);
  }
}

// Time complexity: O(4^n / sqrt(n))
// Space complexity: O(4^n / sqrt(n))
