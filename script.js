/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
};
