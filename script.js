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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return;
  }
  const result = [];
  const queue = [root, null];
  let currentLevel = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push(currentLevel);
      currentLevel = [];
      if (queue.length > 0) {
        queue.push(null);
      }
    } else {
      currentLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
};
