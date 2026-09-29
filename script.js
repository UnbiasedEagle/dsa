/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};
