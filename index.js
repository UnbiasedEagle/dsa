class Solution {
  /**
   * @param {character[][]} board
   * @param {string} word
   * @return {boolean}
   */

  dfs(board, word, i, j, k) {
    if (k === word.length) {
      return true;
    }

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[i].length ||
      board[i][j] !== word[k]
    ) {
      return false;
    }

    const char = word[k];
    board[i][j] = '#';
    let res =
      this.dfs(board, word, i + 1, j, k + 1) ||
      this.dfs(board, word, i - 1, j, k + 1) ||
      this.dfs(board, word, i, j + 1, k + 1) ||
      this.dfs(board, word, i, j - 1, k + 1);
    board[i][j] = char;
    return res;
  }

  exist(board, word) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (word[0] === board[i][j] && this.dfs(board, word, i, j, 0)) {
          return true;
        }
      }
    }

    return false;
  }
}
