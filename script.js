var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stackIn.length > 0) {
    this.stackOut.push(this.stackIn.pop());
  }

  const result = this.stackOut.pop();

  while (this.stackOut.length) {
    this.stackIn.push(this.stackOut.pop());
  }

  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.stackIn.length > 0) {
    this.stackOut.push(this.stackIn.pop());
  }

  const result = this.stackOut[this.stackOut.length - 1];

  while (this.stackOut.length) {
    this.stackIn.push(this.stackOut.pop());
  }

  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackIn.length === 0 && this.stackOut.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
