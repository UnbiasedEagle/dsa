/*
Subarray with K Distinct Integers
https://leetcode.com/problems/subarrays-with-k-different-integers/description/

Input:
- `nums`: an array of positive integers
- `k`: the exact number of distinct integers wanted

Goal:
- count the contiguous subarrays that have exactly k distinct integers

Output:
- the number of such subarrays, as a number

Rules:
- the subarray must be contiguous
- "exactly k" is hard for a window, "at most k" is easy
- exactly(k) = atMost(k) - atMost(k - 1)
- atMost(k) counts subarrays with k or fewer distinct integers
- inside atMost, each `right` adds (right - left + 1) valid subarrays ending at right

Constraints:
- 1 <= nums.length <= 2 * 10^4
- 1 <= nums[i], k <= nums.length

Examples:
subarraysWithKDistinct([1, 2, 1, 2, 3], 2); // 7
subarraysWithKDistinct([1, 2, 1, 3, 4], 3); // 3

Time: O(n)
Space: O(k)
*/

function atMostKDistinct(nums, k) {
  let left = 0;
  const freq = new Map();
  let count = 0;
  let right = 0;
  while (right < nums.length) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
    while (freq.size > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      if (freq.get(nums[left]) === 0) {
        freq.delete(nums[left]);
      }
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
}

function subarraysWithKDistinct(nums, k) {
  return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
}

module.exports = subarraysWithKDistinct;
