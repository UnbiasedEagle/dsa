/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  let tail = dummy;

  let curr = head;

  while (curr) {
    const nextNode = curr.next;
    if (!nextNode) {
      tail.next = curr;
      break;
    }
    const nextNextNode = nextNode.next;
    tail.next = nextNode;
    tail = nextNode;
    tail.next = curr;
    curr = nextNextNode;
    tail = curr;
  }

  return dummy.next;
};
