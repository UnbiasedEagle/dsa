class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  decodeString(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "]") {
        let word = "";

        while (stack.length > 0 && stack[stack.length - 1] !== "[") {
          word = stack.pop() + word;
        }

        stack.pop();
        let count = "";
        while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
          count = stack.pop() + count;
        }
        count = +count;
        let decodedString = "";
        for (let i = 0; i < count; i++) {
          decodedString += word;
        }
        stack.push(decodedString);
      } else {
        stack.push(s[i]);
      }
    }

    return stack.join("");
  }
}
