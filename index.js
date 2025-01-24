class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = '';
    for (const str of strs) {
      result += `${str.length}#${str}`;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];
    let i = 0;
    while (i < str.length) {
      const delimiterIndex = str.indexOf('#', i);
      const length = parseInt(str.slice(i, delimiterIndex));
      const word = str.slice(delimiterIndex + 1, delimiterIndex + 1 + length);
      result.push(word);
      i = delimiterIndex + 1 + length;
    }
    return result;
  }
}
