/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let result = "";
  let openCount = 0;
  let closeCount = 0;

  let i = 0;

  while (i < s.length) {
    if (s[i] === "(") {
      stack.push(s[i]);
      openCount++;
    } else if (s[i] === ")") {
      stack.push(s[i]);
      closeCount++;
    }

    if (closeCount === openCount) {
      let current = "";
      stack.pop();
      while (stack.length > 1) {
        current = stack.pop() + current;
      }
      result += current;
      stack.pop();
      openCount = 0;
      closeCount = 0;
    }

    i++;
  }

  return result;
};
