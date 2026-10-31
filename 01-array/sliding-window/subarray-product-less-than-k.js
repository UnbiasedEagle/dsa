/*
Subarray Product Less Than K
https://leetcode.com/problems/subarray-product-less-than-k/description/

Input:
- `nums`: an array of positive integers
- `k`: the product limit

Goal:
- count the contiguous subarrays whose product is strictly less than k

Output:
- the number of such subarrays, as a number

Rules:
- the subarray must be contiguous
- the product must be strictly less than k
- all numbers are positive, so adding an element never makes the product smaller
- if the window ends at `right`, every subarray ending at `right` inside the window is valid, which is (right - left + 1) subarrays

Constraints:
- 1 <= nums.length <= 3 * 10^4
- 1 <= nums[i] <= 1000
- 0 <= k <= 10^6

Examples:
numSubarrayProductLessThanK([10, 5, 2, 6], 100); // 8
numSubarrayProductLessThanK([1, 2, 3], 0);       // 0

Time: O(n)
Space: O(1)
*/

function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) {
    return 0;
  }

  let left = 0;
  let product = 1;
  let count = 0;
  let right = 0;

  while (right < nums.length) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    count += right - left + 1;
    right++;
  }

  return count;
}

module.exports = numSubarrayProductLessThanK;
