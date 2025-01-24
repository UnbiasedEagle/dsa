class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    let i = 0;

    while (i < nums.length) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
      i++;
      while (i < nums.length && nums[i] === nums[i - 1]) {
        i++;
      }
    }

    return result;
  }
}
