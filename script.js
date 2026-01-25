class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (const str of strs) {
      result += str.length + "#" + str;
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
      let j = i;
      let length = "";
      while (str[j] !== "#") {
        length += str[j];
        j++;
      }
      j++;
      result.push(str.slice(j, j + +length));
      i = j + +length;
    }

    return result;
  }
}
