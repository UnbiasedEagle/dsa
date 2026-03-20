/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  const result = [];

  for (let i = 1; i < intervals.length; i++) {
    let [s, e] = intervals[i];
    if (s > end) {
      result.push([start, end]);
      start = s;
      end = e;
    } else {
      end = Math.max(end, e);
    }
  }
  result.push([start, end]);
  return result;
};
