/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  backtrack(1, k, n, [], result);
  return result;
};

function backtrack(start, k, n, current, result) {
  if (k === 0 && n === 0) {
    result.push([...current]);
    return;
  }
  if (n === 0 || k === 0) {
    return;
  }

  for (let i = start; i <= 9; i++) {
    if (i > n) break;
    current.push(i);
    backtrack(i + 1, k - 1, n - i, current, result);
    current.pop();
  }
}
