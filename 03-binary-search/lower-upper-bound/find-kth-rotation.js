/*
Find kth Rotation
https://www.geeksforgeeks.org/problems/rotation4723/1

Input:
- `arr`: an array of distinct integers that was sorted ascending, then rotated to the right some number of times, e.g. [5, 1, 2, 3, 4]

Goal:
- find how many times the sorted array was rotated

Output:
- the number of rotations, as a number

Rules:
- rotating a sorted array to the right once moves the last element to the front
- after k rotations, the smallest element sits at index k
- so the answer is the index of the smallest element
- it is the same search as Find Minimum in Rotated Sorted Array, but you return the index, not the value
- compare arr[mid] with arr[right], the last element of the current range
- if arr[mid] is bigger than arr[right], the minimum is on the right of mid
- otherwise the minimum is `mid` or on its left
- must run in O(log n) time

Constraints:
- 1 <= arr.length <= 10^5
- 1 <= arr[i] <= 10^7
- all values in arr are distinct

Examples:
findKRotation([5, 1, 2, 3, 4]); // 1, the smallest element 1 is at index 1
findKRotation([1, 2, 3, 4, 5]); // 0, the array was not rotated

Time: O(log n)
Space: O(1)
*/

function findKRotation(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

module.exports = findKRotation;
