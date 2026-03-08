/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return dfs(root).isBalanced;
};

function dfs(root) {
  if (!root) {
    return {
      height: 0,
      isBalanced: true,
    };
  }
  const left = dfs(root.left);
  const right = dfs(root.right);
  const isBalanced = Math.abs(left.height - right.height) <= 1;
  return {
    height: Math.max(left.height, right.height) + 1,
    isBalanced: isBalanced && left.isBalanced && right.isBalanced,
  };
}
