class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const uniqueNums = new Set(nums);

    let maxLength = 0;

    let i = 0;

    while (i < nums.length) {
      if (!uniqueNums.has(nums[i] - 1)) {
        let length = 0;
        let num = nums[i];

        while (uniqueNums.has(num)) {
          length++;
          num++;
        }

        maxLength = Math.max(maxLength, length);
      }
      i++;
    }

    return maxLength;
  }
}
