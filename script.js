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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;

  while (current) {
    let next = current.next;

    while (next && next.val === current.val) {
      next = next.next;
    }

    current.next = next;
    current = current.next;
  }

  return head;
};
