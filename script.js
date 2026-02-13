/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  for (let i = 1; i <= nums.length; i++) {
    result ^= i;
  }

  return result;
};
