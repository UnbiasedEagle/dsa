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
   * @param {number} k
   * @return {number}
   */

  kthSmallest(root, k) {
    const arr = [];

    const inorderTraversal = (root) => {
      if (!root) return;
      inorderTraversal(root.left);
      arr.push(root.val);
      inorderTraversal(root.right);
    };

    inorderTraversal(root);

    return arr[k - 1];
  }
}
