/*
Two Sum II

Given a 1-indexed array `numbers` sorted in non-decreasing order and a `target`,
return [i, j] (1-indexed, i < j) of the two numbers that add up to `target`.
Exactly one solution exists. Use O(1) extra space.

twoSum([2, 7, 11, 15], 9); // [1, 2]
twoSum([2, 3, 4], 6);      // [1, 3]

TODO time: O(n)
TODO space: O(1)
*/

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// TODO: add your own test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]

module.exports = twoSum;
