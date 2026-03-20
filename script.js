/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);
  const stack = [];
  let count = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (
      stack.length === 0 ||
      !isOverlapping(stack[stack.length - 1], intervals[i])
    ) {
      stack.push(intervals[i]);
    } else {
      count++;
    }
  }

  return count;
};

function isOverlapping(a, b) {
  return Math.max(a[0], b[0]) < Math.min(a[1], b[1]);
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
);
