class Node {
  constructor(val) {
    this.val = val;
    this.isEnd = false;
    this.children = new Map();
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */

  buildTrie(words) {
    let root = new Node(null);
    for (let word of words) {
      let node = root;
      for (let char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new Node(char));
        }
        node = node.children.get(char);
      }
      node.isEnd = true;
    }
    return root;
  }

  dfs(board, trie, i, j, result, path) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return;
    }

    if (board[i][j] === '.') {
      return;
    }

    const node = trie.children.get(board[i][j]);

    if (!node) {
      return;
    }

    if (node.isEnd) {
      result.add(path + node.val);
    }

    board[i][j] = '.';

    this.dfs(board, node, i + 1, j, result, path + node.val);
    this.dfs(board, node, i - 1, j, result, path + node.val);
    this.dfs(board, node, i, j + 1, result, path + node.val);
    this.dfs(board, node, i, j - 1, result, path + node.val);

    board[i][j] = node.val;
  }

  findWords(board, words) {
    const row = board.length;
    const col = board[0].length;
    const trie = this.buildTrie(words);
    const result = new Set();

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        this.dfs(board, trie, i, j, result, '');
      }
    }

    return Array.from(result);
  }
}
