/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Time Complexity:  O(log n)  (search space halves each iteration)
 * Space Complexity: O(1)      (only a few pointer variables)
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
