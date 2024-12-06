class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */

  dfs(grid, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] == 0
    )
      return 0;
    grid[i][j] = 0;
    return (
      1 +
      this.dfs(grid, i + 1, j) +
      this.dfs(grid, i - 1, j) +
      this.dfs(grid, i, j + 1) +
      this.dfs(grid, i, j - 1)
    );
  }

  maxAreaOfIsland(grid) {
    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          maxArea = Math.max(maxArea, this.dfs(grid, i, j));
        }
      }
    }
    return maxArea;
  }
}
