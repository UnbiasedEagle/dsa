/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  const arr = costs.map((cost, index) => [cost[0] - cost[1], index]);

  arr.sort((a, b) => a[0] - b[0]);

  let total = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    total += costs[arr[i][1]][0];
  }
  for (let i = arr.length / 2; i < arr.length; i++) {
    total += costs[arr[i][1]][1];
  }
  return total;
};
