/*
Count Occurrences
https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

Input:
- `arr`: an array of integers sorted in non-decreasing order, it may have duplicates
- `target`: an integer to count

Goal:
- count how many times `target` appears in `arr`

Output:
- that count, as a number (0 if it does not appear)

Rules:
- must run in O(log n) time, so use binary search, never a loop over the whole array
- lower bound: the first index whose value is >= target
- upper bound: the first index whose value is > target
- all the copies of `target` sit between those two indexes, so the count is upperBound - lowerBound
- one helper can do both: "first index whose value is >= x", then use x = target for the lower bound and x = target + 1 for the upper bound (the values are integers)
- the search range is [left, right) with right = arr.length, so "all values are smaller" can return arr.length

Constraints:
- 1 <= arr.length <= 10^5
- 1 <= arr[i], target <= 10^6
- arr is sorted in non-decreasing order

Examples:
countFreq([1, 1, 2, 2, 2, 2, 3], 2); // 4
countFreq([1, 1, 2, 2, 2, 2, 3], 4); // 0
countFreq([1, 1, 2, 2, 2, 2, 3], 1); // 2

Time: O(log n)
Space: O(1)
*/

function countFreq(arr, target) {
  function lowerBound() {
    let left = 0;
    let right = arr.length - 1;

    let result = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  }

  function upperBound() {
    let left = 0;
    let right = arr.length - 1;

    let result = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (arr[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  }

  const left = lowerBound();

  if (left === -1) {
    return 0;
  }

  const right = upperBound();

  return right - left + 1;
}

module.exports = countFreq;
