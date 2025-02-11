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
   * @return {number[][]}
   */
  levelOrder(root) {
    if (!root) return [];

    const result = [];
    const queue = [root, null];
    let level = [];

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      } else {
        result.push(level);
        level = [];
        if (queue.length) queue.push(null);
      }
    }
    return result;
  }
}
