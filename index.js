class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    if (nums.length === 1) {
      return nums[0];
    }

    const robRange = (nums, start, end) => {
      let prev2 = 0,
        prev1 = 0;

      for (let i = start; i <= end; i++) {
        const current = Math.max(prev2 + nums[i], prev1);
        prev2 = prev1;
        prev1 = current;
      }

      return prev1;
    };

    return Math.max(
      robRange(nums, 0, nums.length - 2),
      robRange(nums, 1, nums.length - 1)
    );
  }
}
