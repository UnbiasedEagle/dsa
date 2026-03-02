/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid] === nums[mid + 1]) {
      if ((mid - left) % 2 === 0) {
        left = mid + 2;
      } else {
        right = mid - 1;
      }
    } else {
      if ((right - mid) % 2 === 0) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left];
};
