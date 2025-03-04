class Solution {
  /**
   * @param {number} n
   * @return {string[][]}
   */

  backtrack(board, row, result) {
    if (row === board.length) {
      const currentBoard = [];

      for (let i = 0; i < board.length; i++) {
        currentBoard.push([...board[i]].join(''));
      }

      result.push(currentBoard);
      return;
    }

    for (let i = 0; i < board.length; i++) {
      if (this.isValidPosition(board, row, i)) {
        board[row][i] = 'Q';
        this.backtrack(board, row + 1, result);
        board[row][i] = '.';
      }
    }
  }

  isValidPosition(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    let i = row - 1;
    let j = col - 1;

    while (i >= 0 && j >= 0) {
      if (board[i][j] === 'Q') {
        return false;
      }
      i--;
      j--;
    }
    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < board.length) {
      if (board[i][j] === 'Q') {
        return false;
      }
      i--;
      j++;
    }
    return true;
  }

  solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const result = [];
    this.backtrack(board, 0, result);
    return result;
  }
}
