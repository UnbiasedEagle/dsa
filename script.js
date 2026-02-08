class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let rs = 0;
    let re = rows - 1;

    let r = -1;

    while (rs <= re) {
      const mid = Math.floor((rs + re) / 2);

      if (target >= matrix[mid][0] && target <= matrix[mid][cols - 1]) {
        r = mid;
        break;
      } else if (target > matrix[mid][cols - 1]) {
        rs = mid + 1;
      } else {
        re = mid - 1;
      }
    }

    if (r === -1) {
      return false;
    }

    let cs = 0;
    let ce = cols - 1;

    while (cs <= ce) {
      const mid = Math.floor((cs + ce) / 2);

      if (matrix[r][mid] === target) {
        return true;
      }

      if (matrix[r][mid] > target) {
        ce = mid - 1;
      } else {
        cs = mid + 1;
      }
    }

    return false;
  }
}
