/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * Time:  O(n)
 * Space: O(1)
 */
var removeElement = function (nums, val) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  return idx;
};
