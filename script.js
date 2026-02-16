/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const originalColor = image[sr][sc];
  if (originalColor === color) {
    return image;
  }
  dfs(image, sr, sc, originalColor, color);
  return image;
};

function dfs(image, r, c, originalColor, color) {
  if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) {
    return;
  }
  if (image[r][c] !== originalColor) {
    return;
  }
  image[r][c] = color;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const dir of directions) {
    dfs(image, r + dir[0], c + dir[1], originalColor, color);
  }
}
