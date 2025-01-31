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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;
    let current1 = l1;
    let current2 = l2;
    let carry = 0;

    while (current1 || current2 || carry) {
      const sum =
        (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
      current1 = current1 ? current1.next : null;
      current2 = current2 ? current2.next : null;
    }

    return dummy.next;
  }
}
