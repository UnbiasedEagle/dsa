/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  backtrack(0, candidates, target, [], result);
  return result;
};

function backtrack(index, candidates, target, current, result) {
  if (target === 0) {
    result.push([...current]);
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    if (candidates[i] > target) break;
    current.push(candidates[i]);
    backtrack(i, candidates, target - candidates[i], current, result);
    current.pop();
  }
}
