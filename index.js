class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let currentMax = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
      currentMax = Math.max(currentMax + nums[i], nums[i]);
      max = Math.max(max, currentMax);
    }

    return max;
  }
}
