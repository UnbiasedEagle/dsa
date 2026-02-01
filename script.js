class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue2.push(x);

    while (this.queue1.length > 0) {
      this.queue2.push(this.queue1.shift());
    }

    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }
  }

  /**
   * @return {number}
   */
  pop() {
    return this.queue1.shift();
  }

  /**
   * @return {number}
   */
  top() {
    return this.queue1[0];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.queue1.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
