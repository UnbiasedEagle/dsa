/*
Maximum Sum Circular Subarray
https://leetcode.com/problems/maximum-sum-circular-subarray/description/

Input:
- `nums`: a circular array of integers, may contain negatives
- circular means the last element is next to the first element

Goal:
- find the contiguous subarray with the largest sum, where the subarray may wrap around the end

Output:
- that largest sum, as a number

Rules:
- the subarray has at least 1 element and uses each element at most once
- the best subarray is either in the middle (no wrap), or wraps around
- no wrap: this is the normal Kadane's maximum subarray
- wrap: the elements left out form a contiguous subarray in the middle, so the wrapped sum = total - (smallest middle subarray)
- so also track the minimum subarray sum with the mirror of Kadane's
- answer = max(maxSubarray, total - minSubarray)
- special case: if every number is negative, total - minSubarray is 0 (an empty subarray), which is not allowed, so return maxSubarray

Constraints:
- 1 <= nums.length <= 3 * 10^4
- -3 * 10^4 <= nums[i] <= 3 * 10^4

Examples:
maxSubarraySumCircular([1, -2, 3, -2]);   // 3
maxSubarraySumCircular([5, -3, 5]);       // 10, from [5, 5] wrapping around
maxSubarraySumCircular([-3, -2, -3]);     // -2

Time: O(n)
Space: O(1)
*/

function maxSubarraySumCircular(nums) {
  let total = nums.reduce((acc, curr) => acc + curr, 0);

  let maxSum = nums[0];
  let currentMax = nums[0];

  let minSum = nums[0];
  let currentMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    currentMin = Math.min(currentMin + nums[i], nums[i]);

    maxSum = Math.max(maxSum, currentMax);
    minSum = Math.min(minSum, currentMin);
  }

  if (maxSum < 0) {
    return maxSum;
  }

  return Math.max(maxSum, total - minSum);
}

module.exports = maxSubarraySumCircular;
