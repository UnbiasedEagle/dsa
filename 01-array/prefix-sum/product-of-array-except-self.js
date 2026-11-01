/*
Product of Array Except Self
https://leetcode.com/problems/product-of-array-except-self/description/

Input:
- `nums`: an array of integers

Goal:
- for every index i, find the product of all numbers except nums[i]

Output:
- an array `answer`, where answer[i] is the product of every number in nums except nums[i]

Rules:
- don't use division
- run in O(n) time
- use O(1) extra space, not counting the output array
- answer[i] = (product of everything to the left of i) * (product of everything to the right of i)
- fill the output with the left products first, then multiply in the right products with a running variable

Constraints:
- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- the product of any prefix or suffix fits in a 32-bit integer

Examples:
productExceptSelf([1, 2, 3, 4]);       // [24, 12, 8, 6]
productExceptSelf([-1, 1, 0, -3, 3]);  // [0, 0, 9, 0, 0]

Time: O(n)
Space: O(1)
*/

function productExceptSelf(nums) {
  const n = nums.length;
  let answer = Array.from({ length: n }, () => 1);

  let left = 1;

  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= nums[i];
  }

  let right = 1;

  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
}

module.exports = productExceptSelf;
