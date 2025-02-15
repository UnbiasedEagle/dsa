class Node {
  constructor(val) {
    this.val = val;
    this.children = new Map();
    this.isEnd = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        const newNode = new Node();
        node.children.set(char, newNode);
      }
      node = node.children.get(char);

      if (i === word.length - 1) {
        node.isEnd = true;
      }
    }
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return node.isEnd;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return true;
  }
}
