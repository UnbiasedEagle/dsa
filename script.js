class Solution {
  /**
   * @param {number} x
   * @return {number}
   */
  mySqrt(x) {
    let start = 0;
    let end = x;

    let result = x;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (mid * mid <= x) {
        result = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return result;
  }
}
