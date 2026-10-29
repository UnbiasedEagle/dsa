/*
Move Zeroes
https://leetcode.com/problems/move-zeroes/description/

Input:
- `nums`: an array of integers

Goal:
- move every 0 to the end of the array

Output:
- nothing, modify `nums` in place

Rules:
- keep the relative order of the non-zero numbers
- don't make a copy of the array
- use O(1) extra space

Constraints:
- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1

Examples:
moveZeroes([0, 1, 0, 3, 12]); // nums becomes [1, 3, 12, 0, 0]
moveZeroes([0]);              // nums becomes [0]

TODO time:
TODO space:
*/

function moveZeroes(nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[insertPos]] = [nums[insertPos], nums[i]];
      insertPos++;
    }
  }
}

module.exports = moveZeroes;
