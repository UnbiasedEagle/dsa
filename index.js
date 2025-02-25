class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */

  backtrack(idx, nums, target, result, current) {
    if (target === 0) {
      result.push([...current]);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] > target) {
        break;
      }
      current.push(nums[i]);
      this.backtrack(i, nums, target - nums[i], result, current);
      current.pop();
    }
  }

  combinationSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    const current = [];

    this.backtrack(0, nums, target, result, current);

    return result;
  }
}
