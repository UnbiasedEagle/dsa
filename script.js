/**
 * @param {number} n
 * @return {number}
 *
 * Time Complexity:  O(2^n)  (each call branches into two, tighter bound O(φ^n) ≈ O(1.618^n))
 * Space Complexity: O(n)    (max recursion depth)
 */
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
