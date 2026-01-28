class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let l = 0;
    let r = height.length - 1;
    let maxLeft = height[l];
    let maxRight = height[r];
    let result = 0;
    while (l < r) {
      if (height[l] < height[r]) {
        l++;
        maxLeft = Math.max(maxLeft, height[l]);
        result += maxLeft - height[l];
      } else {
        r--;
        maxRight = Math.max(maxRight, height[r]);
        result += maxRight - height[r];
      }
    }

    return result;
  }
}
