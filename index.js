class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // Pre-calculate grid indices to avoid repeated calculations
    const getGridIndex = (i, j) => Math.floor(i / 3) * 3 + Math.floor(j / 3);

    // Use a single Set to store all seen values with their position context
    const seen = new Set();

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const num = board[i][j];
        if (num === '.') continue;

        // Create unique keys for each position context
        const rowKey = `row-${i}-${num}`;
        const colKey = `col-${j}-${num}`;
        const gridKey = `grid-${getGridIndex(i, j)}-${num}`;

        // Check if number already exists in any context
        if (seen.has(rowKey) || seen.has(colKey) || seen.has(gridKey)) {
          return false;
        }

        // Add all position contexts to the set
        seen.add(rowKey);
        seen.add(colKey);
        seen.add(gridKey);
      }
    }

    return true;
  }
}
