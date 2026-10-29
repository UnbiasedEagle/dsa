/*
3Sum
https://leetcode.com/problems/3sum/description/

Input:
- `nums`: an array of integers, unsorted, may contain duplicates

Goal:
- find three numbers from different positions that add up to 0

Output:
- an array of triplets [a, b, c]

Rules:
- a + b + c === 0
- the three numbers must come from three different indices
- no duplicate triplets in the result
- order of triplets and order inside a triplet don't matter

Constraints:
- 3 <= nums.length <= 3000
- -10^5 <= nums[i] <= 10^5

Examples:
threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, -1, 2], [-1, 0, 1]]
threeSum([0, 1, 1]);             // []
threeSum([0, 0, 0]);             // [[0, 0, 0]]

TODO time: O(n^2)
TODO space: O(1)
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  let i = 0;

  while (i < nums.length) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
    i++;
  }

  return result;
}

module.exports = threeSum;
