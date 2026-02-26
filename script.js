/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rottenIndex = [];

  let freshOranges = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }
      if (grid[i][j] === 2) {
        rottenIndex.push([i, j]);
      }
    }
  }

  if (freshOranges === 0) return 0;

  const queue = [];
  let time = 0;

  for (let i = 0; i < rottenIndex.length; i++) {
    queue.push([rottenIndex[i][0], rottenIndex[i][1], 0]);
  }

  while (queue.length > 0) {
    let [row, col, minutes] = queue.shift();
    time = minutes;

    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let [dx, dy] of dirs) {
      let newRow = row + dx;
      let newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2;
        freshOranges--;
        queue.push([newRow, newCol, minutes + 1]);
      }
    }
  }

  if (freshOranges === 0) return time;

  return -1;
};
