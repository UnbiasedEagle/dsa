class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i < heights.length; i++) {
      let leftIdx = i;
      while (stack.length && stack[stack.length - 1][1] > heights[i]) {
        const [idx, height] = stack.pop();
        maxArea = Math.max(maxArea, height * (i - idx));
        leftIdx = idx;
      }
      stack.push([leftIdx, heights[i]]);
    }

    while (stack.length) {
      const [idx, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (heights.length - idx));
    }

    return maxArea;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
