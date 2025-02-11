/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  rightSideView(root) {
    if (!root) return [];

    const result = [];
    const queue = [root, null];
    let prev = null;

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        prev = node;
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      } else {
        result.push(prev.val);
        if (queue.length) {
          queue.push(null);
        }
      }
    }

    return result;
  }
}
