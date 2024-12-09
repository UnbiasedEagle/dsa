class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  missingNumber(nums) {
    let n = nums.length;
    let result = nums.reduce((acc, num) => acc ^ num, 0);
    for (let i = 0; i <= n; i++) {
      result ^= i;
    }
    return result;
  }
}
