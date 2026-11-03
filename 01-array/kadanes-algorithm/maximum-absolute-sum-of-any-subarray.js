/*
Maximum Absolute Sum of Any Subarray
https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/

Input:
- `nums`: an array of integers, may contain negatives

Goal:
- find the largest absolute value of the sum of any contiguous subarray

Output:
- that largest absolute sum, as a number

Rules:
- the subarray may be empty, in which case its sum is 0
- abs(sum) is big when the sum is very positive or very negative
- so the answer is the bigger of: the maximum subarray sum, and the absolute value of the minimum subarray sum
- find the maximum subarray sum with Kadane's
- find the minimum subarray sum with the mirror of Kadane's
- because an empty subarray is allowed, a running sum that goes below 0 (for max) or above 0 (for min) can reset to 0

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

Examples:
maxAbsoluteSum([1, -3, 2, 3, -4]);  // 5, from [2, 3]
maxAbsoluteSum([2, -5, 1, -4, 3, -2]); // 8, from [-5, 1, -4]

Time: O(n)
Space: O(1)
*/

function maxAbsoluteSum(nums) {
  let maxSum = nums[0];
  let currentMax = nums[0];

  let minSum = nums[0];
  let currentMin = nums[0];

  let result = Math.abs(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    currentMin = Math.min(currentMin + nums[i], nums[i]);

    maxSum = Math.max(maxSum, currentMax);
    minSum = Math.min(minSum, currentMin);

    const abs1 = Math.abs(maxSum);
    const abs2 = Math.abs(minSum);

    result = Math.max(result, abs1, abs2);
  }

  return result;
}

module.exports = maxAbsoluteSum;
