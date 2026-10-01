/**
 * @param {number} n
 * @return {boolean}
 *
 * Time Complexity:  O(log n)
 * Space Complexity: O(log n)  (recursion call stack)
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  return isPowerOfTwo(n / 2);
};
