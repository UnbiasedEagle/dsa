/*
Search Insert Position
https://leetcode.com/problems/search-insert-position/description/

Input:
- `nums`: an array of distinct integers, sorted in ascending order
- `target`: an integer

Goal:
- find the index of `target` if it is in `nums`
- otherwise find the index where `target` would be inserted to keep `nums` sorted

Output:
- that index

Rules:
- must run in O(log n) time, so use binary search
- it is the same search as Binary Search, with one change in what you return at the end
- if the middle is the target, return its index
- if the middle is smaller than the target, the target goes to the right of mid
- if the middle is bigger than the target, the target goes at mid or to the left of it
- when the range becomes empty, `left` is the first index whose value is bigger than `target`, which is exactly where it should be inserted
- the answer can be 0 (before everything) or nums.length (after everything)

Constraints:
- 1 <= nums.length <= 10^4
- -10^4 <= nums[i], target <= 10^4
- nums contains distinct values, sorted ascending

Examples:
searchInsert([1, 3, 5, 6], 5); // 2
searchInsert([1, 3, 5, 6], 2); // 1
searchInsert([1, 3, 5, 6], 7); // 4
searchInsert([1, 3, 5, 6], 0); // 0

Time: O(log n)
Space: O(1)
*/

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

module.exports = searchInsert;
