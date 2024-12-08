class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    const ans = [];

    for (let i = 0; i <= n; i++) {
      let j = i;
      let count = 0;

      while (j) {
        count++;
        j = j & (j - 1);
      }

      ans.push(count);
    }

    return ans;
  }
}
