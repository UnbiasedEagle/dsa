class Solution {
  /**
   * @param {string} digits
   * @return {string[]}
   */
  letterCombinations(digits) {
    if (digits.length === 0) return [];

    const map = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    };
    const result = [];

    const dfs = (index = 0, str = '') => {
      if (index === digits.length) {
        result.push(str);
        return;
      }

      for (let i = 0; i < map[digits[index]].length; i++) {
        dfs(index + 1, str + map[digits[index]][i]);
      }
    };

    dfs();

    return result;
  }
}
