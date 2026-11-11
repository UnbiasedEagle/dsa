/*
Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/description/

Input:
- `nums`: an array of distinct integers that was sorted ascending, then rotated at some unknown pivot, e.g. [4, 5, 6, 7, 0, 1, 2]
- `target`: an integer to look for

Goal:
- find the index of `target` in `nums`

Output:
- the index of `target`, or -1 if it is not in `nums`

Rules:
- must run in O(log n) time, so use binary search
- the array is not sorted as a whole, but when you cut it at `mid`, at least one of the two halves is always sorted
- the left half [left..mid] is sorted when nums[left] <= nums[mid]
- otherwise the right half [mid..right] is sorted
- check if the target lies inside the sorted half, using that half's first and last values
- if it does, search that half, otherwise search the other half
- if the middle is the target, return its index

Constraints:
- 1 <= nums.length <= 5000
- -10^4 <= nums[i], target <= 10^4
- all values in nums are unique

Examples:
search([4, 5, 6, 7, 0, 1, 2], 0); // 4
search([4, 5, 6, 7, 0, 1, 2], 3); // -1
search([1], 0);                   // -1

Time: O(log n)
Space: O(1)
*/

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

module.exports = search;
