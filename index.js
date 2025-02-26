class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    if (intervals.length === 0) {
      return [newInterval];
    }

    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      i++;
    }

    if (i === intervals.length) {
      return [...intervals, newInterval];
    }

    if (intervals[i][0] > newInterval[1]) {
      return [...intervals.slice(0, i), newInterval, ...intervals.slice(i)];
    }

    const mergeStart = i;

    let intervalStart = Math.min(intervals[i][0], newInterval[0]);
    let intervalEnd = Math.max(intervals[i][1], newInterval[1]);

    while (i < intervals.length && intervalEnd >= intervals[i][0]) {
      intervalEnd = Math.max(intervals[i][1], intervalEnd);
      i++;
    }

    return [
      ...intervals.slice(0, mergeStart),
      [intervalStart, intervalEnd],
      ...intervals.slice(i),
    ];
  }
}
