class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    const result = Array.from({ length: temperatures.length }, () => 0);

    for (let i = 0; i < temperatures.length; i++) {
      while (
        stack.length &&
        temperatures[stack[stack.length - 1]] < temperatures[i]
      ) {
        const index = stack.pop();
        result[index] = i - index;
      }
      stack.push(i);
    }
    return result;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
