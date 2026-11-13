/*
Floor in a Sorted Array
https://www.geeksforgeeks.org/floor-in-a-sorted-array/

Input:
- `arr`: an array of integers sorted in ascending order, it may have duplicates
- `x`: an integer

Goal:
- find the floor of `x`: the largest element in `arr` that is smaller than or equal to `x`

Output:
- the index of that element, or -1 if every element is bigger than `x`
- if the floor value appears several times, return its last index

Rules:
- must run in O(log n) time, so use binary search
- if arr[mid] <= x, then `mid` could be the floor, so remember it, then look on the right for a bigger one that still works
- if arr[mid] > x, `mid` is too big, so look on the left
- when the range becomes empty, the remembered index is the answer
- start the remembered answer at -1, which stays if nothing is <= x
- this is the mirror of Ceiling in a Sorted Array: there you moved left after a hit, here you move right

Constraints:
- 1 <= arr.length <= 10^5
- -10^9 <= arr[i], x <= 10^9
- arr is sorted in ascending order

Examples:
floorIndex([1, 2, 8, 10, 10, 12, 19], 5);  // 1, the floor is 2
floorIndex([1, 2, 8, 10, 10, 12, 19], 10); // 4, the last 10
floorIndex([1, 2, 8, 10, 10, 12, 19], 0);  // -1, nothing is <= 0
floorIndex([1, 2, 8, 10, 10, 12, 19], 20); // 6, the floor is 19

Time: O(log n)
Space: O(1)
*/

function floorIndex(arr, x) {
  if (arr.length === 0 || x < arr[0]) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  let result = 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > x) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}

module.exports = floorIndex;
