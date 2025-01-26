class MinStack {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push({ val, min: val });
    } else {
      this.stack.push({
        val,
        min: Math.min(val, this.stack[this.stack.length - 1].min),
      });
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1].val;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
}
