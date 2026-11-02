/*
Maximum Subarray
https://leetcode.com/problems/maximum-subarray/description/

Input:
- `nums`: an array of integers, may contain negatives

Goal:
- find the contiguous subarray with the largest sum

Output:
- that largest sum, as a number

Rules:
- the subarray must be contiguous and have at least 1 element
- if every number is negative, the answer is the largest (least negative) single number
- at each index, you choose between extending the previous subarray or starting fresh at this number
- extend when the running sum so far is positive, start fresh when it is negative or zero
- so currentSum = max(nums[i], currentSum + nums[i])

Constraints:
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

Examples:
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6, from [4, -1, 2, 1]
maxSubArray([1]);                             // 1
maxSubArray([5, 4, -1, 7, 8]);                // 23

Time: O(n)
Space: O(1)
*/

function maxSubArray(nums) {
  let current = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    max = Math.max(max, current);
  }

  return max;
}

module.exports = maxSubArray;
