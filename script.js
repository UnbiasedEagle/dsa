/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = Array(nums1.length).fill(-1);
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }

  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length > 0) {
      const index = map.get(nums2[i]);
      result[index] = stack[stack.length - 1];
    }
    stack.push(nums2[i]);
  }

  return result;
};
