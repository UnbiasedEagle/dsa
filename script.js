class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rowsSet = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const grid = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => new Set()),
    );

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") {
          if (rowsSet[i].has(board[i][j])) {
            return false;
          }
          if (cols[j].has(board[i][j])) {
            return false;
          }
          const gridRow = Math.floor(i / 3);
          const gridCol = Math.floor(j / 3);

          if (grid[gridRow][gridCol].has(board[i][j])) {
            return false;
          }

          cols[j].add(board[i][j]);
          rowsSet[i].add(board[i][j]);
          grid[gridRow][gridCol].add(board[i][j]);
        }
      }
    }

    return true;
  }
}
