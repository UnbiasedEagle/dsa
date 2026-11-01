/*
Find Pivot Index
https://leetcode.com/problems/find-pivot-index/description/

Input:
- `nums`: an array of integers, may contain negatives

Goal:
- find the pivot index, where the sum of the numbers to its left equals the sum of the numbers to its right

Output:
- the leftmost pivot index, or -1 if there is none

Rules:
- the number at the pivot itself is not included on either side
- if the pivot is at index 0, the left sum is 0
- if the pivot is at the last index, the right sum is 0
- right sum = total - left sum - nums[i], so one pass for the total is enough
- return the leftmost pivot if there are several

Constraints:
- 1 <= nums.length <= 10^4
- -1000 <= nums[i] <= 1000

Examples:
pivotIndex([1, 7, 3, 6, 5, 6]); // 3
pivotIndex([1, 2, 3]);          // -1
pivotIndex([2, 1, -1]);         // 0

Time: O(n)
Space: O(1)
*/

function pivotIndex(nums) {
  let total = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

module.exports = pivotIndex;
