class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  getNext(n) {
    let totalSum = 0;
    while (n > 0) {
      const d = n % 10;
      n = Math.floor(n / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  isHappy(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = this.getNext(n);
    }
    return n === 1;
  }
}
