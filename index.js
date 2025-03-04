class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  backtrack(nums, current, subsets, index = 0) {
    subsets.push(current.slice());

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      current.push(nums[i]);
      this.backtrack(nums, current, subsets, i + 1);
      current.pop();
    }
  }

  subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const current = [];
    const subsets = [];

    this.backtrack(nums, current, subsets);

    return subsets;
  }
}
