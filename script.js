/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let fast = head;
    while (n > 0) {
      fast = fast.next;
      n--;
    }

    if (!fast) {
      return head.next;
    }

    let slow = head;

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
    return head;
  }
}
