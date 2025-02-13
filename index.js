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

  helper(root, min, max) {
    if (root === null) return true;

    if (root.val <= min || root.val >= max) return false;

    return (
      this.helper(root.right, root.val, max) &&
      this.helper(root.left, min, root.val)
    );
  }

  isValidBST(root) {
    return this.helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  }
}
