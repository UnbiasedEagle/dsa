class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxWater = 0;

    let start = 0;
    let end = heights.length - 1;

    while (start < end) {
      if (heights[start] < heights[end]) {
        const water = heights[start] * (end - start);
        maxWater = Math.max(water, maxWater);
        start++;
      } else {
        const water = heights[end] * (end - start);
        maxWater = Math.max(water, maxWater);
        end--;
      }
    }

    return maxWater;
  }
}
