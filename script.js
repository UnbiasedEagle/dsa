/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  const queue = [root, null];
  const levels = [];

  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      for (let i = 0; i < levels.length - 1; i++) {
        levels[i].next = levels[i + 1];
      }
      levels.length = 0;
      if (queue.length) {
        queue.push(null);
      }
    } else {
      levels.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return root;
};
