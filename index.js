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

  helper(root) {
    if (root === null) {
      return {
        height: 0,
        diameter: 0,
      };
    }

    const leftHeight = this.helper(root.left);
    const rightHeight = this.helper(root.right);

    const height = Math.max(leftHeight.height, rightHeight.height) + 1;

    const diameter = Math.max(
      leftHeight.diameter,
      rightHeight.diameter,
      leftHeight.height + rightHeight.height
    );

    return {
      height,
      diameter,
    };
  }

  diameterOfBinaryTree(root) {
    return this.helper(root).diameter;
  }
}
