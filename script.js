/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);
  backtrack(0, nums, [], result, used);
  return result;
};

function backtrack(index, nums, current, result, used) {
  if (index === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
    used[i] = true;
    current.push(nums[i]);
    backtrack(index + 1, nums, current, result, used);
    current.pop();
    used[i] = false;
  }
}
