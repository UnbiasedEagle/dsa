/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  backtrack(0, 1, n, k, [], result);
  return result;
};

function backtrack(index, starting, n, k, current, result) {
  if (index === k) {
    result.push([...current]);
    return;
  }

  for (let i = starting; i <= n; i++) {
    current[index] = i;
    backtrack(index + 1, i + 1, n, k, current, result);
  }
}
