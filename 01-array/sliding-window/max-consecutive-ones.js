/*
Max Consecutive Ones
https://leetcode.com/problems/max-consecutive-ones/description/

Input:
- `nums`: a binary array, every value is 0 or 1

Goal:
- find the longest run of 1s in a row

Output:
- the length of that run, as a number

Rules:
- the 1s must be next to each other
- a 0 ends the current run

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is 0 or 1

Examples:
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); // 3
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]); // 2

Time: O(n)
Space: O(1)
*/

function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let max = 0;

  for (const num of nums) {
    if (num === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }

  return max;
}

module.exports = findMaxConsecutiveOnes;
