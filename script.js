/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const diff = gas.map((g, i) => g - cost[i]);
  const total = diff.reduce((acc, curr) => acc + curr, 0);
  if (total < 0) return -1;

  let result = 0;
  let totalGas = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += diff[i];
    if (totalGas < 0) {
      result = i + 1;
      totalGas = 0;
    }
  }
  return result;
};
