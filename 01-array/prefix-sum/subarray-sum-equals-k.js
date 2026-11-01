/*
Subarray Sum Equals K
https://leetcode.com/problems/subarray-sum-equals-k/description/

Input:
- `nums`: an array of integers, may contain negatives and zeros
- `k`: the target sum

Goal:
- count the contiguous subarrays whose sum equals k

Output:
- the number of such subarrays, as a number

Rules:
- the subarray must be contiguous
- negatives are allowed, so a sliding window does not work here
- prefix[i] = sum of nums[0..i]
- the subarray (j, i] has sum k when prefix[i] - prefix[j] === k
- so at each i, count how many earlier prefix sums equal prefix[i] - k
- the empty prefix 0 counts once, for subarrays that start at index 0

Constraints:
- 1 <= nums.length <= 2 * 10^4
- -1000 <= nums[i] <= 1000
- -10^7 <= k <= 10^7

Examples:
subarraySum([1, 1, 1], 2);  // 2
subarraySum([1, 2, 3], 3);  // 2
subarraySum([1, -1, 0], 0); // 3

Time: O(n)
Space: O(n)
*/

function subarraySum(nums, k) {
  const prefixCount = new Map();
  prefixCount.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const comp = sum - k;
    if (prefixCount.has(comp)) {
      count += prefixCount.get(comp);
    }
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }
  return count;
}

module.exports = subarraySum;
