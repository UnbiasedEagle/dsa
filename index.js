class Codec {
  /**
   * Encodes a tree to a single string.
   *
   * @param {TreeNode} root
   * @return {string}
   */
  serialize(root) {
    if (!root) {
      return 'null';
    }

    const left = this.serialize(root.left);
    const right = this.serialize(root.right);

    let result = root.val;
    result += ',' + left;
    result += ',' + right;
    return result;
  }

  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  deserialize(data) {
    const nodes = data.split(',');

    let index = 0;

    const dfs = () => {
      if (index >= nodes.length) {
        return null;
      }

      if (nodes[index] === 'null') {
        return null;
      }

      const node = new TreeNode(parseInt(nodes[index]));
      index++;
      node.left = dfs();
      index++;
      node.right = dfs();
      return node;
    };

    return dfs();
  }
}
