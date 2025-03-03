class Solution {
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */

  backtrack(candidates, target, path, result, index) {
    if (target === 0) {
      result.push([...path]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] > target) break;

      if (i > index && candidates[i] == candidates[i - 1]) continue;

      path.push(candidates[i]);
      this.backtrack(candidates, target - candidates[i], path, result, i + 1);
      path.pop();
    }
  }

  combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);

    const current = [];
    const result = [];

    this.backtrack(candidates, target, current, result, 0);

    return result;
  }
}
