/*
Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water/description/

Input:
- `height`: an array of non-negative integers
- height[i] is the height of a bar at position i, each bar has width 1

Goal:
- find how much rain water is trapped between the bars

Output:
- the total units of trapped water, as a number

Rules:
- water above a bar = min(tallest bar to its left, tallest bar to its right) - its own height
- water above a bar is never negative
- the first and last bars can't hold water

Constraints:
- 1 <= height.length <= 2 * 10^4
- 0 <= height[i] <= 10^5

Examples:
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
trap([4, 2, 0, 3, 2, 5]);                   // 9

TODO time:
TODO space:
*/

function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

module.exports = trap;
