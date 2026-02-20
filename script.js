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
 */
var oddEvenList = function (head) {
  let current = head;
  const dummyOdd = new ListNode(0);
  const dummyEven = new ListNode(0);

  let odd = dummyOdd;
  let even = dummyEven;

  let isOdd = true;

  while (current) {
    if (isOdd) {
      odd.next = current;
      odd = odd.next;
    } else {
      even.next = current;
      even = even.next;
    }
    isOdd = !isOdd;
    current = current.next;
  }

  odd.next = dummyEven.next;
  even.next = null;

  return dummyOdd.next;
};
