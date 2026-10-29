/*
Sort Colors
https://leetcode.com/problems/sort-colors/description/

Input:
- `nums`: an array where every value is 0, 1 or 2 (red, white, blue)

Goal:
- sort the array so all 0s come first, then 1s, then 2s

Output:
- nothing, modify `nums` in place

Rules:
- don't use a library sort
- solve it in a single pass
- use O(1) extra space

Constraints:
- 1 <= nums.length <= 300
- nums[i] is 0, 1 or 2

Examples:
sortColors([2, 0, 2, 1, 1, 0]); // nums becomes [0, 0, 1, 1, 2, 2]
sortColors([2, 0, 1]);          // nums becomes [0, 1, 2]

TODO time: O(n)
TODO space: O(1)
*/

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

module.exports = sortColors;
