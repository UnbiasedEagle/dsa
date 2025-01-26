class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
      if (!isNaN(parseInt(token))) {
        stack.push(parseInt(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        switch (token) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(Math.trunc(operand1 / operand2));
            break;
        }
      }
    }
    return stack[0];
  }
}
