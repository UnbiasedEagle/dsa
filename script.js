/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const result = [];
  backtrack(board, result, 0, n);
  return result;
};

function backtrack(board, result, row, n) {
  if (row === n) {
    result.push(board.map((row) => row.join("")));
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isValid(board, row, col, n)) {
      board[row][col] = "Q";
      backtrack(board, result, row + 1, n);
      board[row][col] = ".";
    }
  }
}

function isValid(board, row, col, n) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }
  return true;
}
