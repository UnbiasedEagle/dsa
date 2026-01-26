class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
      const total = nums[start] + nums[end];

      if (total === target) {
        return [start + 1, end + 1];
      }

      if (total > target) {
        end--;
      } else {
        start++;
      }
    }

    return [];
  }
}
