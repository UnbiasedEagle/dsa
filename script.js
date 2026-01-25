class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    this.store = Array.from({ length: rows + 1 }, () =>
      Array.from({ length: cols + 1 }, () => 0),
    );

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        this.store[i][j] =
          matrix[i - 1][j - 1] +
          this.store[i - 1][j] +
          this.store[i][j - 1] -
          this.store[i - 1][j - 1];
      }
    }
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    row1 = row1 + 1;
    col1 = col1 + 1;
    row2 = row2 + 1;
    col2 = col2 + 1;

    const result =
      this.store[row2][col2] -
      this.store[row1 - 1][col2] -
      this.store[row2][col1 - 1] +
      this.store[row1 - 1][col1 - 1];

    return result;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
