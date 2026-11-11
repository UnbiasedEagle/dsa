/*
Binary Search
https://leetcode.com/problems/binary-search/description/

Input:
- `nums`: an array of integers, sorted in ascending order, all different
- `target`: an integer to look for

Goal:
- find the index of `target` in `nums`

Output:
- the index of `target`, or -1 if it is not in `nums`

Rules:
- the array is sorted, so look at the middle element and throw away half of the array each step
- if the middle is the target, you are done
- if the middle is smaller than the target, the target can only be on the right side
- if the middle is bigger than the target, the target can only be on the left side
- keep the search range as `left` and `right`, both included
- stop when the range is empty, which means the target is not there
- must run in O(log n) time

Constraints:
- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- all numbers in nums are unique, sorted ascending

Examples:
search([-1, 0, 3, 5, 9, 12], 9); // 4
search([-1, 0, 3, 5, 9, 12], 2); // -1

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

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

module.exports = search;
