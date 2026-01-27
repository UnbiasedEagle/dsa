class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  rotate(nums, k) {
    k = k % nums.length;
    const rem = nums.length - k;
    this.reverse(nums, 0, rem - 1);
    this.reverse(nums, rem, nums.length - 1);
    this.reverse(nums, 0, nums.length - 1);
  }

  reverse(nums, left, right) {
    while (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
}
