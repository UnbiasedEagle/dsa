/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return Math.max(max, count);
};
