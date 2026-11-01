/*
Subarray Sum Divisible by K
https://leetcode.com/problems/subarray-sums-divisible-by-k/description/

Input:
- `nums`: an array of integers, may contain negatives
- `k`: a positive integer

Goal:
- count the contiguous subarrays whose sum is divisible by k

Output:
- the number of such subarrays, as a number

Rules:
- the subarray must be contiguous, any length of at least 1
- if two prefix sums have the same remainder mod k, the subarray between them is divisible by k
- so count how many earlier prefix sums share the current remainder
- in JavaScript, % can give a negative remainder, e.g. -1 % 5 === -1
- fix a negative remainder by turning it into the matching positive one: ((sum % k) + k) % k
- seed the map with remainder 0 seen once, for subarrays that start at index 0

Constraints:
- 1 <= nums.length <= 3 * 10^4
- -10^4 <= nums[i] <= 10^4
- 2 <= k <= 10^4

Examples:
subarraysDivByK([4, 5, 0, -2, -3, 1], 5); // 7
subarraysDivByK([5], 9);                  // 0

Time: O(n)
Space: O(min(n, k))
*/

function subarraysDivByK(nums, k) {
  const remainderCount = new Map();
  remainderCount.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const key = ((sum % k) + k) % k;
    if (remainderCount.has(key)) {
      count += remainderCount.get(key);
    }
    remainderCount.set(key, (remainderCount.get(key) || 0) + 1);
  }
  return count;
}

module.exports = subarraysDivByK;
