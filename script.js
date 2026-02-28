/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid === 0) {
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (mid === nums.length - 1) {
      if (nums[mid] > nums[mid - 1]) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        return mid;
      } else if (nums[mid] < nums[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
