/*
Max Consecutive Ones III
https://leetcode.com/problems/max-consecutive-ones-iii/description/

Input:
- `nums`: a binary array, every value is 0 or 1
- `k`: how many 0s you are allowed to flip to 1

Goal:
- find the longest run of 1s after flipping at most k zeros

Output:
- the length of that run, as a number

Rules:
- you flip at most k zeros, not exactly k
- the run must be contiguous
- a window is valid when it contains at most k zeros

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is 0 or 1
- 0 <= k <= nums.length

Examples:
longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2); // 6
longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3); // 10

Time: O(n)
Space: O(1)
*/

function longestOnes(nums, k) {
  let left = 0;
  let zeros = 0;
  let max = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
}

module.exports = longestOnes;
