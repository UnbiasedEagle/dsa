/*
Ceiling in a Sorted Array
https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/

Input:
- `arr`: an array of integers sorted in ascending order, it may have duplicates
- `x`: an integer

Goal:
- find the ceiling of `x`: the smallest element in `arr` that is greater than or equal to `x`

Output:
- the index of that element, or -1 if every element is smaller than `x`
- if the ceiling value appears several times, return its first index

Rules:
- must run in O(log n) time, so use binary search
- if arr[mid] >= x, then `mid` could be the ceiling, so remember it, then look on the left for a smaller one that still works
- if arr[mid] < x, `mid` is too small, so look on the right
- when the range becomes empty, the remembered index is the answer
- start the remembered answer at -1, which stays if nothing is >= x
- this is the same "first index whose value is >= x" idea from Find First and Last Position, with an answer variable

Constraints:
- 1 <= arr.length <= 10^5
- -10^9 <= arr[i], x <= 10^9
- arr is sorted in ascending order

Examples:
ceilIndex([1, 2, 8, 10, 10, 12, 19], 5);  // 2, the ceiling is 8
ceilIndex([1, 2, 8, 10, 10, 12, 19], 10); // 3, the first 10
ceilIndex([1, 2, 8, 10, 10, 12, 19], 20); // -1, nothing is >= 20
ceilIndex([1, 2, 8, 10, 10, 12, 19], 0);  // 0, the ceiling is 1

Time: O(log n)
Space: O(1)
*/

function ceilIndex(arr, x) {
  if (arr.length === 0 || x > arr[arr.length - 1]) {
    return -1;
  }

  let result = arr.length - 1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result;
}

module.exports = ceilIndex;
