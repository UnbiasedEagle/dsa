class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    let i = 0;
    const result = [];
    while (i < nums.length) {
      let start = i + 1;
      let end = nums.length - 1;

      while (start < end) {
        const total = nums[i] + nums[start] + nums[end];

        if (total === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;

          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }

          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (total > 0) {
          end--;
        } else {
          start++;
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
