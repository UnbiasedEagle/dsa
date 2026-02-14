class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this.dummyHead = new Node();
  this.dummyTail = new Node();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length) {
    return -1;
  }
  let curr = this.dummyHead.next;

  while (index > 0) {
    curr = curr.next;
    index--;
  }

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  if (this.length === 0) {
    node.prev = this.dummyHead;
    node.next = this.dummyTail;
    this.dummyHead.next = node;
    this.dummyTail.prev = node;
    this.length++;
  } else {
    const currHead = this.dummyHead.next;
    node.next = currHead;
    node.prev = this.dummyHead;
    this.dummyHead.next = node;
    currHead.prev = node;
    this.length++;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  if (this.length === 0) {
    node.prev = this.dummyHead;
    node.next = this.dummyTail;
    this.dummyHead.next = node;
    this.dummyTail.prev = node;
    this.length++;
  } else {
    const currentTail = this.dummyTail.prev;
    node.next = this.dummyTail;
    node.prev = currentTail;
    this.dummyTail.prev = node;
    currentTail.next = node;
    this.length++;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.length) {
    this.addAtTail(val);
  } else {
    let curr = this.dummyHead.next;

    while (index > 0) {
      curr = curr.next;
      index--;
    }

    const node = new Node(val);
    node.next = curr;
    node.prev = curr.prev;
    curr.prev.next = node;
    curr.prev = node;
    this.length++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length) {
    return;
  }
  if (this.length === 1) {
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.length--;
  } else {
    let curr = this.dummyHead.next;
    while (index > 0) {
      curr = curr.next;
      index--;
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.length--;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
