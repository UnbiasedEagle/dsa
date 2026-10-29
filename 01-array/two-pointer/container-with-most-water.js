/*
Container With Most Water
https://leetcode.com/problems/container-with-most-water/description/

Input:
- `height`: an array of non-negative integers
- height[i] is a vertical line at position i

Goal:
- pick two lines that, with the x-axis, form a container holding the most water

Output:
- the maximum amount of water, as a number

Rules:
- water = (distance between the two lines) * (the shorter of the two heights)
- the container can't be tilted
- the two lines must be different

Constraints:
- 2 <= height.length <= 10^5
- 0 <= height[i] <= 10^4

Examples:
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 1]);                      // 1

TODO time:
TODO space:
*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;

  let max = 0;

  while (left < right) {
    const width = right - left;
    const water = width * Math.min(height[left], height[right]);
    max = Math.max(max, water);
    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}

module.exports = maxArea;
