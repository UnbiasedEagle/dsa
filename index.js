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
   * @return {number}
   */
  goodNodes(root) {
    const result = [];

    const dfs = (node, maxValue = Number.MIN_SAFE_INTEGER) => {
      if (node === null) return;

      if (node.val > maxValue) {
        maxValue = node.val;
        result.push(node.val);
      }

      dfs(node.left, maxValue);
      dfs(node.right, maxValue);
    };

    dfs(root);

    return result.length;
  }
}
