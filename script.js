class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = Array.from({ length: temperatures.length }, () => 0);
    const stack = [temperatures.length - 1];

    for (let i = temperatures.length - 2; i >= 0; i--) {
      while (
        stack.length > 0 &&
        temperatures[i] >= temperatures[stack[stack.length - 1]]
      ) {
        stack.pop();
      }

      if (stack.length > 0) {
        result[i] = stack[stack.length - 1] - i;
      }
      stack.push(i);
    }

    return result;
  }
}
