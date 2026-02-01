class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  searchInsert(nums, target) {
    if (target < nums[0]) {
      return 0;
    }
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }

    let start = 0;
    let end = nums.length - 1;
    let result = nums.length;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[mid] > target) {
        result = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return result;
  }
}
