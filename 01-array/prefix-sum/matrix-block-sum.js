/*
Matrix Block Sum
https://leetcode.com/problems/matrix-block-sum/description/

Input:
- `mat`: an m x n matrix of integers
- `k`: how far to reach in every direction

Goal:
- for every cell (r, c), sum all cells (i, j) where r - k <= i <= r + k and c - k <= j <= c + k

Output:
- an m x n matrix `answer`, where answer[r][c] is that block sum

Rules:
- the block is clipped at the matrix edges, cells outside the matrix don't count
- build a 2D prefix sum first: prefix[i][j] = sum of the rectangle from (0, 0) to (i - 1, j - 1)
- make prefix (m + 1) x (n + 1), with a row and column of zeros at the start, so edges need no special cases
- prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]
- the sum of a rectangle with top-left (r1, c1) and bottom-right (r2, c2), inclusive:
  prefix[r2+1][c2+1] - prefix[r1][c2+1] - prefix[r2+1][c1] + prefix[r1][c1]

Constraints:
- m == mat.length, n == mat[i].length
- 1 <= m, n, k <= 100
- 1 <= mat[i][j] <= 100

Examples:
matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1); // [[12, 21, 16], [27, 45, 33], [24, 39, 28]]
matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2); // [[45, 45, 45], [45, 45, 45], [45, 45, 45]]

Time: O(m * n)
Space: O(m * n)
*/

function matrixBlockSum(mat, k) {
  let m = mat.length;
  let n = mat[0].length;

  const prefix = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0),
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefix[i][j] =
        prefix[i - 1][j] +
        prefix[i][j - 1] +
        mat[i - 1][j - 1] -
        prefix[i - 1][j - 1];
    }
  }

  const answer = Array.from({ length: m }, () => Array.from({ length: n }));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const rs = Math.max(0, i - k);
      const re = Math.min(m - 1, i + k);
      const cs = Math.max(0, j - k);
      const ce = Math.min(n - 1, j + k);

      const sum =
        prefix[re + 1][ce + 1] -
        prefix[rs][ce + 1] -
        prefix[re + 1][cs] +
        prefix[rs][cs];
      answer[i][j] = sum;
    }
  }

  return answer;
}

module.exports = matrixBlockSum;
