class Solution {
  /**
   * @param {string[]} words
   * @param {string} order
   * @return {boolean}
   */
  isAlienSorted(words, order) {
    const charMap = new Map();
    for (let i = 0; i < order.length; i++) {
      charMap.set(order[i], i);
    }

    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];

      for (let j = 0; j < word1.length; j++) {
        if (j >= word2.length) return false;
        if (word1[j] !== word2[j]) {
          if (charMap.get(word1[j]) > charMap.get(word2[j])) {
            return false;
          }
          break;
        }
      }
    }
    return true;
  }
}

// Time Complexity: O(n * m)
// Space Complexity: O(1)
