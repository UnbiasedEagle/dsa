/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  backtrack(0, candidates, target, [], result);
  return result;
};

function backtrack(index, candidates, target, current, result) {
  if (target === 0) {
    result.push([...current]);
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    if (candidates[i] > target) break;
    current.push(candidates[i]);
    backtrack(i + 1, candidates, target - candidates[i], current, result);
    current.pop();
  }
}
