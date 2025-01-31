// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    if (!head) return null;
    const map = new Map();

    let current = head;
    while (current) {
      map.set(current, new Node(current.val));
      current = current.next;
    }

    current = head;
    while (current) {
      map.get(current).next = map.get(current.next) || null;
      map.get(current).random = map.get(current.random) || null;
      current = current.next;
    }

    return map.get(head);
  }
}
