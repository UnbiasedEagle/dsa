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
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  buildTree(preorder, inorder) {
    let idx = -1;
    function build(left, right) {
      if (left > right) {
        return null;
      }
      idx++;
      let root = new TreeNode(preorder[idx]);
      const index = inorder.indexOf(preorder[idx]);
      root.left = build(left, index - 1);
      root.right = build(index + 1, right);
      return root;
    }
    return build(0, preorder.length - 1);
  }
}
