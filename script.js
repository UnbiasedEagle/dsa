class Solution {
  /**
   * @param {string[]} operations
   * @return {number}
   */
  calPoints(operations) {
    const stack = [];

    for (const operation of operations) {
      if (operation === "+") {
        const num1 = stack.pop();
        const num2 = stack.pop();
        stack.push(num2);
        stack.push(num1);
        stack.push(num1 + num2);
      } else if (operation === "D") {
        stack.push(stack[stack.length - 1] * 2);
      } else if (operation === "C") {
        stack.pop();
      } else {
        stack.push(+operation);
      }
    }

    return stack.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
}
