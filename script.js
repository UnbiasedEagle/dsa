/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < min) {
      min = nums[mid];
    }
    // left part is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[mid] <= nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // right part is sorted
    else {
      right = mid - 1;
    }
  }

  return min;
};
