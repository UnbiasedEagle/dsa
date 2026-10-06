/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * Time Complexity:  O(m + n)
 * Space Complexity: O(1)
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA && nodeB) {
    if (nodeA === nodeB) {
      return nodeA;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  if (!nodeA && !nodeB) {
    return null;
  }

  if (!nodeA) {
    nodeA = headB;
    while (nodeB) {
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
    nodeB = headA;
    while (nodeA && nodeB) {
      if (nodeA === nodeB) {
        return nodeA;
      }
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
    return null;
  }
  if (!nodeB) {
    nodeB = headA;
    while (nodeA) {
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
    nodeA = headB;
    while (nodeA && nodeB) {
      if (nodeA === nodeB) {
        return nodeA;
      }
      nodeA = nodeA.next;
      nodeB = nodeB.next;
    }
    return null;
  }
};
