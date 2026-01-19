class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  islandPerimeter(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
        return 1;
      }
      if (grid[r][c] === -1) {
        return 0;
      }
      grid[r][c] = -1;
      return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    };

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          return dfs(i, j);
        }
      }
    }
  }
}

// Time Complexity: O(rows * cols)
// Space Complexity: O(rows * cols)
