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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  return dfs(root, targetSum);
};

function dfs(root, targetSum) {
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }
  let left = false;
  let right = false;
  if (root.left) {
    left = dfs(root.left, targetSum - root.val);
  }
  if (root.right) {
    right = dfs(root.right, targetSum - root.val);
  }
  return left || right;
}
