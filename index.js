class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const maxLeftHeight = Array.from({ length: height.length }, () => 0);
    const maxRightHeight = Array.from({ length: height.length }, () => 0);

    let leftMaxHeight = height[0];

    for (let i = 0; i < height.length; i++) {
      maxLeftHeight[i] = leftMaxHeight;
      leftMaxHeight = Math.max(leftMaxHeight, height[i]);
    }

    let rightMaxHeight = height[height.length - 1];

    for (let i = height.length - 1; i >= 0; i--) {
      maxRightHeight[i] = rightMaxHeight;
      rightMaxHeight = Math.max(rightMaxHeight, height[i]);
    }

    let totalWater = 0;

    for (let i = 0; i < height.length; i++) {
      const currentWater =
        Math.min(maxLeftHeight[i], maxRightHeight[i]) - height[i];
      if (currentWater > 0) {
        totalWater += currentWater;
      }
    }

    return totalWater;
  }
}
