class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length)
      return this.findMedianSortedArrays(nums2, nums1);

    const totalElements = nums1.length + nums2.length;
    const leftLength = Math.floor((totalElements + 1) / 2);

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
      const elementToTakeFromLeft = Math.floor((left + right) / 2);
      const elementToTakeFromRight = leftLength - elementToTakeFromLeft;

      const nums1Left =
        elementToTakeFromLeft <= 0
          ? -Infinity
          : nums1[elementToTakeFromLeft - 1];
      const nums1Right =
        elementToTakeFromLeft >= nums1.length
          ? Infinity
          : nums1[elementToTakeFromLeft];
      const nums2Left =
        elementToTakeFromRight <= 0
          ? -Infinity
          : nums2[elementToTakeFromRight - 1];
      const nums2Right =
        elementToTakeFromRight >= nums2.length
          ? Infinity
          : nums2[elementToTakeFromRight];

      if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
        if (totalElements % 2 === 0) {
          return (
            (Math.max(nums1Left, nums2Left) +
              Math.min(nums1Right, nums2Right)) /
            2
          );
        } else {
          return Math.max(nums1Left, nums2Left);
        }
      } else if (nums1Left > nums2Right) {
        right = elementToTakeFromLeft - 1;
      } else {
        left = elementToTakeFromLeft + 1;
      }
    }
    return 0;
  }
}
