/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
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
};
