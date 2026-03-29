class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs) {
    const firstStr = strs[0];
    let result = '';

    for (let i = 0; i < firstStr.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== firstStr[i]) {
          return result;
        }
      }
      result += firstStr[i];
    }
    return result;
  }
}
