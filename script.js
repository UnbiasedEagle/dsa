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
 * @return {number}
 */
var goodNodes = function (root) {
  return dfs(root, root.val);
};

function dfs(root, maxi) {
  if (!root) {
    return 0;
  }
  const left = dfs(root.left, Math.max(maxi, root.val));
  const right = dfs(root.right, Math.max(maxi, root.val));
  return left + right + (root.val >= maxi ? 1 : 0);
}
