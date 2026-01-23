class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  sortColors(nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;

    while (mid <= end) {
      if (nums[mid] === 1) {
        mid++;
      } else if (nums[mid] === 0) {
        [nums[mid], nums[start]] = [nums[start], nums[mid]];
        start++;
        mid++;
      } else {
        [nums[mid], nums[end]] = [nums[end], nums[mid]];
        end--;
      }
    }
  }
}
