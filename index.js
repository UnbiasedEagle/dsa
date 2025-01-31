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
    const dummyNode = new ListNode(0, head);
    let slow = dummyNode;
    let fast = head;

    while (n > 0) {
      fast = fast.next;
      n--;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummyNode.next;
  }
}
