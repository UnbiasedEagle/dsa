class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Singly linked list with head and tail pointers.
 *
 * Overall Space Complexity: O(n) for n stored nodes.
 * Every operation uses O(1) auxiliary space.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 *
 * Time Complexity:  O(index), O(n) worst case (walk from head)
 * Space Complexity: O(1)
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 *
 * Time Complexity:  O(1)
 * Space Complexity: O(1)
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.size === 0) {
    this.head = new Node(val, null);
    this.tail = this.head;
  } else {
    const newNode = new Node(val, this.head);
    this.head = newNode;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 *
 * Time Complexity:  O(1) (tail pointer avoids traversal)
 * Space Complexity: O(1)
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) {
    this.head = new Node(val, null);
    this.tail = this.head;
  } else {
    const newNode = new Node(val, null);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 *
 * Time Complexity:  O(index), O(n) worst case (O(1) at head or tail)
 * Space Complexity: O(1)
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    const newNode = new Node(val, null);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 *
 * Time Complexity:  O(index), O(n) worst case (O(1) at head)
 * Space Complexity: O(1)
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    if (index === this.size - 1) this.tail = current;
  }
  this.size--;
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
