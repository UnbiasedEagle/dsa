class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums) {
    const result = [];
    const count = 2;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < nums.length; j++) {
        result.push(nums[j]);
      }
    }
    return result;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
