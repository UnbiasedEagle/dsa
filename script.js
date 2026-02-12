/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function mergeSort(nums, start, end) {
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);

  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);

  merge(nums, start, mid, end);
}

function merge(nums, start, mid, end) {
  const temp = [];
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }

  while (j <= end) {
    temp.push(nums[j]);
    j++;
  }

  for (let i = 0; i < temp.length; i++) {
    nums[start + i] = temp[i];
  }
}
