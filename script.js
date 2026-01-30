class Solution {
  /**
   * @param {number} target
   * @param {number[]} nums
   * @return {number}
   */
  minSubArrayLen(target, nums) {
    let minLength = Infinity;

    let sum = 0;

    let left = 0;
    let right = 0;

    while (right < nums.length) {
      sum += nums[right];

      while (sum >= target) {
        const length = right - left + 1;
        minLength = Math.min(minLength, length);
        sum -= nums[left];
        left++;
      }

      right++;
    }

    return minLength === Infinity ? 0 : minLength;
  }
}
