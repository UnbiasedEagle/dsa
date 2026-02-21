/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  const length = getLength(head);
  k = k % length;

  if (k === 0) {
    return head;
  }

  let rem = length - k;
  let curr = head;
  while (rem > 1) {
    curr = curr.next;
    rem--;
  }

  const newHead = curr.next;
  let tail = newHead;
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = head;
  curr.next = null;

  return newHead;
};

const getLength = (head) => {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
};
