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
var maxPathSum = function (root) {
  return dfs(root).maxSum;
};

function dfs(root) {
  if (!root) {
    return {
      maxSum: -Infinity,
      maxSumWithRoot: 0,
    };
  }

  const left = dfs(root.left);
  const right = dfs(root.right);

  const leftGain = Math.max(left.maxSumWithRoot, 0);
  const rightGain = Math.max(right.maxSumWithRoot, 0);

  const maxSum = Math.max(
    left.maxSum,
    right.maxSum,
    root.val + leftGain + rightGain,
  );
  const maxSumWithRoot = root.val + Math.max(leftGain, rightGain);
  return {
    maxSum,
    maxSumWithRoot,
  };
}
