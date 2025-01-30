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

  reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    return prev;
  }

  reorderList(head) {
    if (!head || !head.next) {
      return;
    }
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let nextNode = slow.next;
    slow.next = null;
    let rev = this.reverse(nextNode);

    let dummy = new ListNode();
    let tail1 = head;
    let tail2 = rev;

    while (tail1 && tail2) {
      dummy.next = tail1;
      tail1 = tail1.next;
      dummy.next.next = tail2;
      tail2 = tail2.next;
      dummy = dummy.next.next;
    }

    if (tail1) {
      dummy.next = tail1;
    }

    if (tail2) {
      dummy.next = tail2;
    }

    head = dummy.next;
  }
}
