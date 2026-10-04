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
 *
 * Fast and slow pointers: fast moves 2 steps per iteration, slow moves 1.
 * When fast reaches the end, slow is at the middle (second middle for even n).
 *
 * Time Complexity:  O(n), fast traverses the list once (about n/2 iterations)
 * Space Complexity: O(1), only two pointers are used
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
