/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return Math.max(
    calculate(nums, 0, nums.length - 2),
    calculate(nums, 1, nums.length - 1),
  );
};

function calculate(nums, start, end) {
  if (end - start === 0) {
    return nums[start];
  }
  const dp = [];
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[end];
}
