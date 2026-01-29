class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const map = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    const stack = [];

    for (const ch of s) {
      if (ch in map) {
        if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
          return false;
        }
        stack.pop();
      } else {
        stack.push(ch);
      }
    }

    return stack.length === 0;
  }
}
