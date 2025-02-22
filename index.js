class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countSetBits(n) {
    let count = 0;
    while (n) {
      count++;
      n = n & (n - 1);
    }
    return count;
  }

  countBits(n) {
    const result = [];

    for (let i = 0; i <= n; i++) {
      result.push(this.countSetBits(i));
    }

    return result;
  }
}
