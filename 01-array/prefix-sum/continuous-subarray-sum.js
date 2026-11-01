/*
Continuous Subarray Sum
https://leetcode.com/problems/continuous-subarray-sum/description/

Input:
- `nums`: an array of non-negative integers
- `k`: an integer

Goal:
- check if some subarray of length at least 2 has a sum that is a multiple of k

Output:
- true if such a subarray exists, otherwise false

Rules:
- the subarray must be contiguous
- the subarray must have at least 2 elements
- 0 is a multiple of every k, so a subarray that sums to 0 counts
- if two prefix sums have the same remainder when divided by k, the subarray between them sums to a multiple of k
- so store the first index where each remainder was seen, in a Map
- the subarray between index j and i has length i - j, so it needs i - j >= 2
- seed the map with remainder 0 at index -1, for subarrays that start at index 0

Constraints:
- 1 <= nums.length <= 10^5
- 0 <= nums[i] <= 10^9
- 0 <= sum(nums[i]) <= 2^31 - 1
- 1 <= k <= 2^31 - 1

Examples:
checkSubarraySum([23, 2, 4, 6, 7], 6); // true, [2, 4] sums to 6
checkSubarraySum([23, 2, 6, 4, 7], 6); // true, [23, 2, 6, 4, 7] sums to 42
checkSubarraySum([23, 2, 6, 4, 7], 13); // false

Time: O(n)
Space: O(min(n, k))
*/

function checkSubarraySum(nums, k) {
  const firstSeen = new Map();
  firstSeen.set(0, -1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const key = sum % k;

    if (!firstSeen.has(key)) {
      firstSeen.set(key, i);
    } else {
      const distance = i - firstSeen.get(key);
      if (distance >= 2) {
        return true;
      }
    }
  }

  return false;
}

module.exports = checkSubarraySum;
