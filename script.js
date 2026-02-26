/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const copy = [...nums, ...nums];
  const result = Array(nums.length).fill(-1);
  const stack = [];

  for (let i = copy.length - 1; i >= 0; i--) {
    while (stack.length > 0 && copy[i] >= copy[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i % nums.length] = copy[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
};
