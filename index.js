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
   * @return {boolean}
   */

  helper(root) {
    if (root == null) {
      return {
        height: 0,
        balanced: true,
      };
    }
    const left = this.helper(root.left);
    const right = this.helper(root.right);
    const height = Math.max(left.height, right.height) + 1;
    return {
      height,
      balanced:
        left.balanced &&
        right.balanced &&
        Math.abs(left.height - right.height) <= 1,
    };
  }

  isBalanced(root) {
    return this.helper(root).balanced;
  }
}
