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
var diameterOfBinaryTree = function (root) {
  return dfs(root).diameter;
};

function dfs(root) {
  if (!root) {
    return {
      height: 0,
      diameter: 0,
    };
  }
  const left = dfs(root.left);
  const right = dfs(root.right);
  const diameter = Math.max(
    left.diameter,
    right.diameter,
    left.height + right.height,
  );
  return {
    height: Math.max(left.height, right.height) + 1,
    diameter: diameter,
  };
}
