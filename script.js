class Solution {
  /**
   * @param {string} path
   * @return {string}
   */
  simplifyPath(path) {
    const dirs = path.split("/").filter((el) => el.length > 0);

    const stack = [];

    for (const dir of dirs) {
      if (dir === ".") {
        continue;
      } else if (dir === "..") {
        stack.pop();
      } else {
        stack.push(dir);
      }
    }

    return "/" + stack.join("/");
  }
}
