class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  helper(nums, i, current, result) {
    if (i === nums.length) {
      result.push([...current]);
      return;
    }
    this.helper(nums, i + 1, current, result);
    current.push(nums[i]);
    this.helper(nums, i + 1, current, result);
    current.pop();
  }

  subsets(nums) {
    const result = [];
    this.helper(nums, 0, [], result);
    return result;
  }
}
