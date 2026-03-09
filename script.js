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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const queue = [root, null];
  const level = [];

  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      result.push(level[level.length - 1]);
      level.length = 0;
      if (queue.length) {
        queue.push(null);
      }
    } else {
      level.push(node.val);
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
