/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time Complexity:  O(n log n)  (log n levels of splitting, O(n) merge work per level)
 * Space Complexity: O(n)        (temp arrays during merge + O(log n) recursion stack)
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function mergeSort(nums, left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
  const temp = [];
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
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
  while (j <= right) {
    temp.push(nums[j]);
    j++;
  }
  for (let k = left; k <= right; k++) {
    nums[k] = temp[k - left];
  }
}
