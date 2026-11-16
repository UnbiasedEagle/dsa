/*
Minimum Speed to Arrive on Time
https://leetcode.com/problems/minimum-speed-to-arrive-on-time/description/

Input:
- `dist`: an array of positive integers, dist[i] is the length in km of the i-th train ride
- `hour`: a number (it can have a decimal part), the total hours you have to reach the office

Goal:
- find the smallest positive integer speed (km/h) that gets you to the office on time

Output:
- that minimum speed, as a number, or -1 if it is impossible

Rules:
- you must take the trains in order
- each train can only leave at an integer hour, so after each ride except the last you wait until the next whole hour
- so every ride except the last takes Math.ceil(dist[i] / speed) hours
- the last ride takes exactly dist[last] / speed hours, with no rounding up
- the total time at one speed is the sum of those, and a faster speed never takes longer
- that makes the speeds 1..10^7 a sorted yes/no line ("arrives within `hour`"), so binary search on the answer
- the answer is never more than 10^7 when it exists
- impossible case: even with an enormous speed, every ride except the last still takes at least 1 hour, so you need hour > dist.length - 1; if not, return -1
- when a speed works, remember it and try a slower one; when it does not, try a faster one

Constraints:
- n == dist.length
- 1 <= n <= 10^5
- 1 <= dist[i] <= 10^5
- 1 <= hour <= 10^9
- there are at most two digits after the decimal point in `hour`

Examples:
minSpeedOnTime([1, 3, 2], 6);   // 1
minSpeedOnTime([1, 3, 2], 2.7); // 3
minSpeedOnTime([1, 3, 2], 1.9); // -1

Time: O(n * log m), where n is dist.length and m is 10^7, the biggest speed
Space: O(1)
*/

function minSpeedOnTime(dist, hour) {
  let left = 1;
  let right = Math.pow(10, 7);
  let ans = -1;

  while (left <= right) {
    const speed = left + Math.floor((right - left) / 2);

    let time = 0;

    for (let i = 0; i < dist.length - 1; i++) {
      time += Math.ceil(dist[i] / speed);
    }

    time += dist[dist.length - 1] / speed;

    // tolerance, because decimals like 1 + 0.14 add up to 1.1400000000000001
    if (time <= hour + 1e-9) {
      ans = speed;
      right = speed - 1;
    } else {
      left = speed + 1;
    }
  }

  return ans;
}

module.exports = minSpeedOnTime;
