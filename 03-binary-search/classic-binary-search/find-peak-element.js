/*
Find Peak Element
https://leetcode.com/problems/find-peak-element/description/

Input:
- `nums`: an array of integers, where nums[i] != nums[i + 1] for every valid i

Goal:
- find any peak element, an element strictly greater than its neighbors

Output:
- the index of any one peak

Rules:
- imagine nums[-1] and nums[n] are -Infinity, so the first and last elements can be peaks too
- the array is not sorted, but you can still binary search, in O(log n) time
- compare nums[mid] with its right neighbor nums[mid + 1]
- if nums[mid] < nums[mid + 1], the numbers are going up, so a peak must exist on the right side
- otherwise nums[mid] > nums[mid + 1], the numbers are going down, so `mid` itself or something on its left is a peak
- keep shrinking until left and right meet, that index is a peak
- loop while left < right, so mid + 1 is always a valid index

Constraints:
- 1 <= nums.length <= 1000
- -2^31 <= nums[i] <= 2^31 - 1
- nums[i] != nums[i + 1] for all valid i

Examples:
findPeakElement([1, 2, 3, 1]);          // 2, nums[2] = 3 is a peak
findPeakElement([1, 2, 1, 3, 5, 6, 4]); // 1 or 5, both are peaks, either is accepted
findPeakElement([1]);                   // 0

Time: O(log n)
Space: O(1)
*/

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const leftVal = mid - 1 < 0 ? -Infinity : nums[mid - 1];
    const rightVal = mid + 1 >= nums.length ? -Infinity : nums[mid + 1];

    if (nums[mid] > leftVal && nums[mid] > rightVal) {
      return mid;
    }

    if (nums[mid] < leftVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

module.exports = findPeakElement;
