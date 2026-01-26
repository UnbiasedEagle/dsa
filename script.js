class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[][]}
   */
  fourSum(nums, target) {
    nums.sort((a, b) => a - b);

    let i = 0;

    const result = [];

    while (i < nums.length) {
      let j = i + 1;
      while (j < nums.length) {
        let start = j + 1;
        let end = nums.length - 1;

        while (start < end) {
          const total = nums[i] + nums[j] + nums[start] + nums[end];

          if (total === target) {
            result.push([nums[i], nums[j], nums[start], nums[end]]);

            start++;
            end--;

            while (start < end && nums[start] === nums[start - 1]) {
              start++;
            }

            while (start < end && nums[end] === nums[end + 1]) {
              end--;
            }
          } else if (total > target) {
            end--;
          } else {
            start++;
          }
        }

        j++;

        while (j < nums.length && nums[j] === nums[j - 1]) {
          j++;
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
