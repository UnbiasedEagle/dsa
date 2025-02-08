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
   * @param {number} k
   * @return {ListNode}
   */
  reverseKGroup(head, k) {
    // single node
    if (!head || !head.next) return head;

    let current = head;
    let count = 0;

    while (current && count < k - 1) {
      current = current.next;
      count++;
    }

    if (!current) return head;

    let nextNode = current.next;
    current.next = null;
    let reversed = this.reverseKGroup(nextNode, k);
    const newHead = this.reverse(head);
    head.next = reversed;
    return newHead;
  }

  reverse(head) {
    let current = head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}
