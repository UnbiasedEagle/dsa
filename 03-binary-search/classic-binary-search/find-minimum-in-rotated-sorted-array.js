/*
Find Minimum in Rotated Sorted Array
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

Input:
- `nums`: an array of distinct integers that was sorted ascending, then rotated, e.g. [3, 4, 5, 1, 2]

Goal:
- find the smallest element of `nums`

Output:
- that smallest value, as a number

Rules:
- must run in O(log n) time, so use binary search
- the smallest element is the point where the rotation happened
- compare nums[mid] with nums[right], the last element of the current range
- if nums[mid] is bigger than nums[right], the drop happens somewhere to the right of mid, so the minimum is in mid + 1..right
- otherwise nums[mid] is on the same sorted run as nums[right], so the minimum is `mid` or to its left, and `mid` itself could be the answer
- when left and right meet, that index holds the minimum
- loop while left < right, not left <= right, because the range shrinks to a single index

Constraints:
- 1 <= nums.length <= 5000
- -5000 <= nums[i] <= 5000
- all values in nums are unique

Examples:
findMin([3, 4, 5, 1, 2]);       // 1
findMin([4, 5, 6, 7, 0, 1, 2]); // 0
findMin([11, 13, 15, 17]);      // 11, the array was rotated 0 times

Time: O(log n)
Space: O(1)
*/

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  let result = nums[0];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < result) {
      result = nums[mid];
    }

    // left part is sorted
    if (nums[mid] >= nums[left]) {
      if (nums[right] < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // right part is sorted
    else {
      right = mid - 1;
    }
  }

  return result;
}

module.exports = findMin;
