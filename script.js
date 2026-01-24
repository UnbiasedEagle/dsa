class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  removeDuplicates(nums) {
    let idx = 1;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[idx - 1]) {
        nums[idx] = nums[i];
        idx++;
      }
    }
    return idx;
  }
}
