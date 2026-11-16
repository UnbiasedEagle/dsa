/*
Aggressive Cows
https://www.geeksforgeeks.org/problems/aggressive-cows/1

Input:
- `stalls`: an array of integers, the positions of the stalls on a line (not sorted)
- `k`: the number of cows to place, one cow per stall

Goal:
- place the `k` cows in the stalls so the smallest distance between any two cows is as large as possible

Output:
- that largest possible minimum distance, as a number

Rules:
- sort `stalls` first, so neighbors in the array are neighbors on the line
- the minimum distance can be as small as 1 and as big as stalls[last] - stalls[0]
- to test a distance `d`, place cows greedily: put the first cow in the first stall, then put the next cow in the first stall that is at least `d` away from the last cow
- if you can place all `k` cows this way, then `d` works
- a smaller distance is always easier, so "d works" is true for small `d` and false from some `d` upward
- that makes the distances 1..(stalls[last] - stalls[0]) a sorted yes/no line, so binary search on the answer
- here you want the maximum, so when `d` works, remember it and try a bigger one; when it does not, try a smaller one
- this is the opposite direction from Koko Eating Bananas, where you wanted the minimum

Constraints:
- 2 <= k <= stalls.length <= 10^5
- 0 <= stalls[i] <= 10^9
- all stall positions are different

Examples:
aggressiveCows([1, 2, 4, 8, 9], 3);     // 3, cows at 1, 4, 8 (or 1, 4, 9)
aggressiveCows([10, 1, 2, 7, 5], 3);    // 4, cows at 1, 5, 10
aggressiveCows([2, 12, 11, 3, 26, 7], 5); // 1, five cows in six stalls leave almost no space

Time: O(n log n + n log m), where m is the biggest gap between stalls
Space: O(1) extra, the sort is done in place
*/

function aggressiveCows(stalls, k) {
  stalls.sort((a, b) => a - b);

  let left = 1;
  let right = stalls[stalls.length - 1] - stalls[0];
  let answer = 0;

  while (left <= right) {
    const distance = left + Math.floor((right - left) / 2);
    let placed = 1;
    let lastPos = 0;
    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - stalls[lastPos] >= distance) {
        placed++;
        lastPos = i;
      }
    }

    if (placed >= k) {
      answer = distance;
      left = distance + 1;
    } else {
      right = distance - 1;
    }
  }

  return answer;
}

module.exports = aggressiveCows;
