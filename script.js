/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        result++;
        dfs(grid, i, j);
      }
    }
  }

  return result;
};

function dfs(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }
  grid[i][j] = "0";

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const dir of dirs) {
    dfs(grid, i + dir[0], j + dir[1]);
  }
}
