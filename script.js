/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  reverse(nums1, 0, m - 1);
  reverse(nums1, 0, nums1.length - 1);
  let idx = 0;
  let i = nums1.length - m;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      nums1[idx] = nums1[i];
      i++;
    } else {
      nums1[idx] = nums2[j];
      j++;
    }
    idx++;
  }

  while (j < nums2.length) {
    nums1[idx] = nums2[j];
    idx++;
    j++;
  }
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
