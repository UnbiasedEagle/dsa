/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  const middle = getMiddle(head);
  let otherHead = middle.next;

  middle.next = null;
  otherHead = reverse(otherHead);

  while (head && otherHead) {
    if (head.val !== otherHead.val) {
      return false;
    }
    head = head.next;
    otherHead = otherHead.next;
  }

  return true;
};

function getMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
