/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  backtrack(0, nums, result, []);
  return result;
};

function backtrack(index, nums, result, current) {
  if (index === nums.length) {
    result.push([...current]);
    return;
  }

  current.push(nums[index]);
  backtrack(index + 1, nums, result, current);
  current.pop();
  backtrack(index + 1, nums, result, current);
}

// Time Complexity: O(2^n)
// Space Complexity: O(n)
