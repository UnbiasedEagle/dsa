/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
};
