/*
Minimum Size Subarray Sum
https://leetcode.com/problems/minimum-size-subarray-sum/description/

Input:
- `target`: a positive integer
- `nums`: an array of positive integers

Goal:
- find the shortest contiguous subarray whose sum is at least target

Output:
- the length of that subarray, or 0 if no subarray works

Rules:
- the subarray must be contiguous
- the sum must be greater than or equal to target
- all numbers are positive, so adding an element never lowers the sum
- here you shrink the window while it is valid, to find the smallest one

Constraints:
- 1 <= target <= 10^9
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4

Examples:
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); // 2, from [4, 3]
minSubArrayLen(4, [1, 4, 4]);          // 1
minSubArrayLen(11, [1, 1, 1, 1, 1]);   // 0

Time: O(n)
Space: O(1)
*/

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let min = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
}

module.exports = minSubArrayLen;
