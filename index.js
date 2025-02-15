class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map();
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(char, new Node(char));
      }
      node = node.children.get(char);
    }
    node.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */

  helper(node, word) {
    if (node.isEnd && word.length === 0) {
      return true;
    }

    if (word.length === 0) {
      return false;
    }
    const char = word[0];

    if (char === '.') {
      for (const [key, value] of node.children) {
        if (this.helper(value, word.slice(1))) {
          return true;
        }
      }
      return false;
    }

    if (node.children.has(char)) {
      return this.helper(node.children.get(char), word.slice(1));
    }

    return false;
  }

  search(word) {
    return this.helper(this.root, word);
  }
}
