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
   * @return {void}
   */
  reorderList(head) {
    const mid = this.getMid(head);
    let head2 = mid.next;
    mid.next = null;
    head2 = this.reverseList(head2);
    this.merge(head, head2);
  }

  merge(head1, head2) {
    let curr1 = head1;
    let curr2 = head2;
    while (curr1 && curr2) {
      const next1 = curr1.next;
      const next2 = curr2.next;
      curr1.next = curr2;
      curr2.next = next1;
      curr1 = next1;
      curr2 = next2;
    }
  }

  reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  getMid(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}
