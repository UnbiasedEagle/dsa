/*
Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/description/

Input:
- `nums`: an array of integers, may contain negatives and zeros

Goal:
- find the contiguous subarray with the largest product

Output:
- that largest product, as a number

Rules:
- the subarray must be contiguous and have at least 1 element
- a negative number can flip the smallest product into the largest one
- so track both the biggest and the smallest product of a subarray ending at the current index
- at each number, the new biggest is the max of: the number alone, biggest * number, smallest * number
- at each number, the new smallest is the min of those same three
- compute the new biggest and smallest from the OLD values, so keep a copy before overwriting
- a zero resets both, because the number alone (0) wins in both cases

Constraints:
- 1 <= nums.length <= 2 * 10^4
- -10 <= nums[i] <= 10
- the product of any prefix or suffix fits in a 32-bit integer

Examples:
maxProduct([2, 3, -2, 4]);  // 6, from [2, 3]
maxProduct([-2, 0, -1]);    // 0
maxProduct([-2, 3, -4]);    // 24

Time: O(n)
Space: O(1)
*/

function maxProduct(nums) {
  let maxEnding = nums[0];
  let minEnding = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const candidate1 = nums[i];
    const candidate2 = nums[i] * maxEnding;
    const candidate3 = nums[i] * minEnding;

    maxEnding = Math.max(candidate1, candidate2, candidate3);
    minEnding = Math.min(candidate1, candidate2, candidate3);

    result = Math.max(result, maxEnding);
  }

  return result;
}

module.exports = maxProduct;
