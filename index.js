class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let intervalStart = intervals[0][0];
    let intervalEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] > intervalEnd) {
        result.push([intervalStart, intervalEnd]);
        intervalStart = intervals[i][0];
        intervalEnd = intervals[i][1];
      } else {
        intervalEnd = Math.max(intervalEnd, intervals[i][1]);
      }
    }

    result.push([intervalStart, intervalEnd]);
    return result;
  }
}
