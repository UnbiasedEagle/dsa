/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const timeLine = Array(1001).fill(0);
  for (const [num, start, end] of trips) {
    timeLine[start] += num;
    timeLine[end] -= num;
  }
  let current = 0;
  for (const delta of timeLine) {
    current += delta;
    if (current > capacity) return false;
  }
  return true;
};
