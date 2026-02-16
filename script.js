/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headBa
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let curr1 = headA;
  let curr2 = headB;

  while (curr1 && curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  if (curr1 === null) {
    curr1 = headB;
    while (curr2) {
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    curr2 = headA;

    while (curr1 && curr2) {
      if (curr1 === curr2) {
        return curr1;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    return null;
  }

  curr2 = headA;
  while (curr1) {
    curr2 = curr2.next;
    curr1 = curr1.next;
  }
  curr1 = headB;
  while (curr1 && curr2) {
    if (curr1 === curr2) {
      return curr1;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return null;
};
