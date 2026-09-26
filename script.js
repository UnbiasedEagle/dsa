/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time:  O(n)
 * Space: O(1)
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
};
