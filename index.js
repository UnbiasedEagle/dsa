class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let maxReachable = 0;

    for (let i = 0; i < nums.length; i++) {
      maxReachable = Math.max(maxReachable, i + nums[i]);

      if (maxReachable <= i) {
        return false;
      }
    }

    return true;
  }
}
