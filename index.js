class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const bracketMap = {
      '(': ')',
      '{': '}',
      '[': ']',
    };

    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (bracketMap[char]) {
        stack.push(char);
      } else {
        const top = stack.pop();
        if (bracketMap[top] !== char) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
