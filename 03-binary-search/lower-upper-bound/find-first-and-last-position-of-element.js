/*
Find First and Last Position of Element in Sorted Array
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

Input:
- `nums`: an array of integers sorted in non-decreasing order, it may have duplicates
- `target`: an integer to look for

Goal:
- find the first and the last index where `target` appears in `nums`

Output:
- an array [first, last], or [-1, -1] if `target` is not in `nums`

Rules:
- must run in O(log n) time, so use binary search, never a loop over the whole array
- lower bound: the first index whose value is >= some number `x`; it can be nums.length if every value is smaller
- the first position of `target` is lowerBound(target), but only if nums[that index] really equals `target`
- the last position of `target` is lowerBound(target + 1) - 1, the spot right before the first value that is bigger than `target`
- so you only need one helper: it returns the first index whose value is >= a given number
- search range is [left, right) with right = nums.length, so "not found" can return nums.length

Constraints:
- 0 <= nums.length <= 10^5
- -10^9 <= nums[i], target <= 10^9
- nums is sorted in non-decreasing order

Examples:
searchRange([5, 7, 7, 8, 8, 10], 8);  // [3, 4]
searchRange([5, 7, 7, 8, 8, 10], 6);  // [-1, -1]
searchRange([], 0);                   // [-1, -1]

Time: O(log n)
Space: O(1)
*/

function searchRange(nums, target) {
  function lowerBound() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  function upperBound() {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  return [lowerBound(), upperBound()];
}

module.exports = searchRange;
