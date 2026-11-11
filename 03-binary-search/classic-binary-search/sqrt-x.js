/*
Sqrt(x)
https://leetcode.com/problems/sqrtx/description/

Input:
- `x`: a non-negative integer

Goal:
- find the square root of `x`, rounded down to the nearest integer

Output:
- that integer

Rules:
- don't use `Math.sqrt`, `**` with 0.5, or any built-in square root
- the answer is a number between 0 and x
- numbers whose square is <= x come first, and numbers whose square is > x come after, so the numbers 0..x are already "sorted" for this test
- binary search for the largest number `m` where m * m <= x
- when mid * mid <= x, `mid` could be the answer, so remember it and look for a bigger one on the right
- when mid * mid > x, `mid` is too big, so look on the left

Constraints:
- 0 <= x <= 2^31 - 1

Examples:
mySqrt(4);  // 2
mySqrt(8);  // 2, the square root is 2.82842..., rounded down
mySqrt(0);  // 0
mySqrt(1);  // 1

Time: O(log x)
Space: O(1)
*/

function mySqrt(x) {
  let left = 0;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid <= x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

module.exports = mySqrt;
