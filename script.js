/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const visted = Array.from({ length: nums.length }, () => false);
  const result = [];
  const current = Array.from({ length: nums.length });
  backtrack(0, nums, current, visted, result);
  return result;
};

function backtrack(count, nums, current, visted, result) {
  if (count === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!visted[i]) {
      current[count] = nums[i];
      visted[i] = true;
      backtrack(count + 1, nums, current, visted, result);
      visted[i] = false;
    }
  }
}
