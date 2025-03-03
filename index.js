class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  backtrack(nums, current, result, used) {
    if (current.length === nums.length) {
      result.push(current.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      current.push(nums[i]);
      used[i] = true;
      this.backtrack(nums, current, result, used);
      used[i] = false;
      current.pop();
    }
  }

  permute(nums) {
    const current = [];
    const result = [];
    const used = Array(nums.length).fill(false);
    backtrack(nums, current, result, used);
    return result;
  }
}
