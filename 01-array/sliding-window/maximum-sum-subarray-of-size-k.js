/*
Maximum Sum Subarray of Size K

Input:
- `nums`: an array of integers
- `k`: the size of the subarray

Goal:
- find the contiguous subarray of exactly size k with the largest sum

Output:
- the maximum sum, as a number

Rules:
- the subarray must be contiguous
- the subarray must have exactly k elements
- if the array has fewer than k elements, return 0

Constraints:
- 1 <= k <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

Examples:
maxSumSubarray([2, 1, 5, 1, 3, 2], 3); // 9, from [5, 1, 3]
maxSumSubarray([2, 3, 4, 1, 5], 2);    // 7, from [3, 4]

Time: O(n)
Space: O(1)
*/

function maxSumSubarray(nums, k) {
  if (nums.length < k) {
    return 0;
  }

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let max = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i];
    windowSum -= nums[i - k];

    max = Math.max(max, windowSum);
  }

  return max;
}

module.exports = maxSumSubarray;
