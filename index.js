class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }

  searchMatrix(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (target < matrix[mid][0]) {
        end = mid - 1;
      } else if (target > matrix[mid][matrix[mid].length - 1]) {
        start = mid + 1;
      } else {
        return this.binarySearch(matrix[mid], target);
      }
    }
    return false;
  }
}

// Time complexity: O(log(m) + log(n))
// Space complexity: O(1)
