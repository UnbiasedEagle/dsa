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
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(0, head);
  let node = dummy;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return dummy.next;
};
