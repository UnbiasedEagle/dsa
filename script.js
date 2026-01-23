class Solution {
  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} Do not return anything, modify nums1 in-place instead.
   */
  merge(nums1, m, nums2, n) {
    let i = 0;
    let j = m - 1;

    while (i < j) {
      [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
      i++;
      j--;
    }

    nums1.reverse();

    let idx = 0;
    j = 0;
    i = nums1.length - m;

    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        nums1[idx] = nums1[i++];
      } else {
        nums1[idx] = nums2[j++];
      }
      idx++;
    }

    while (j < nums2.length) {
      nums1[idx] = nums2[j++];
      idx++;
    }
    return nums1;
  }
}
