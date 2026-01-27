class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  firstMissingPositive(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        nums[i] = 0;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i]) - 1;

      if (idx < nums.length) {
        nums[idx] = Math.abs(nums[idx]) * -1;
      }
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        return i + 1;
      }
    }

    return nums.length;
  }
}
