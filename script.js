/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let curr = head;

  while (curr && curr.val === val) {
    curr = curr.next;
  }

  if (!curr) {
    return null;
  }

  head = curr;

  while (curr) {
    let nextNode = curr.next;

    while (nextNode && nextNode.val === val) {
      nextNode = nextNode.next;
    }

    curr.next = nextNode;
    curr = nextNode;
  }

  return head;
};
