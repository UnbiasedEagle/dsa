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
  maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const dfs = (node) => {
      if (!node) return Number.MIN_SAFE_INTEGER;
      const left = dfs(node.left);
      const right = dfs(node.right);

      const sum = Math.max(
        node.val,
        node.val + left,
        node.val + right,
        node.val + left + right
      );

      maxSum = Math.max(maxSum, sum);

      return Math.max(node.val, node.val + left, node.val + right);
    };

    dfs(root);

    return maxSum;
  }
}
