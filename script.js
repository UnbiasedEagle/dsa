class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs) {
    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[0][i] !== strs[j][i]) {
          return result;
        }
      }
      result += strs[0][i];
    }
    return result;
  }
}

// Time Complexity: O(n*m)
// Space Complexity: O(1)
