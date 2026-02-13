/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      current = 0;
    }
    result = Math.max(result, current);
  }

  return result;
};
