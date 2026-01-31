class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const operators = ["+", "-", "/", "*"];
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "/": (a, b) => Math.trunc(a / b),
      "*": (a, b) => a * b,
    };
    const stack = [];
    for (const token of tokens) {
      if (operators.includes(token)) {
        const num1 = stack.pop();
        const num2 = stack.pop();

        stack.push(operations[token](num2, num1));
      } else {
        stack.push(+token);
      }
    }

    return stack[stack.length - 1];
  }
}
