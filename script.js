/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let uniqueCount = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueCount - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};
