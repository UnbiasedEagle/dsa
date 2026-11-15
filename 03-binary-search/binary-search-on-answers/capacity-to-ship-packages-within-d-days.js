/*
Capacity To Ship Packages Within D Days
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

Input:
- `weights`: an array of positive integers, the weight of each package, in the order they must be shipped
- `days`: the number of days the ship has to deliver everything

Goal:
- find the smallest ship capacity that delivers all packages within `days` days

Output:
- that minimum capacity, as a number

Rules:
- packages must be loaded in the given order, you cannot reorder them
- each day, load packages in order until the next one would go over the capacity, then ship and start a new day
- the capacity can never be less than the heaviest package, or that package could never ship
- the capacity never needs to be more than the sum of all weights, which ships everything in 1 day
- a bigger capacity never needs more days, so "can ship within `days`" is false for small capacities and true from some capacity upward
- that makes the capacities max(weights)..sum(weights) a sorted yes/no line, so binary search on the answer
- to test one capacity, simulate the loading: count how many days it needs
- when a capacity works, remember it and try a smaller one; when it does not, try a bigger one

Constraints:
- 1 <= days <= weights.length <= 5 * 10^4
- 1 <= weights[i] <= 500

Examples:
shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); // 15
shipWithinDays([3, 2, 2, 4, 1, 4], 3);              // 6
shipWithinDays([1, 2, 3, 1, 1], 4);                 // 3

Time: O(n * log s), where n is weights.length and s is the sum of the weights
Space: O(1)
*/

function shipWithinDays(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, curr) => acc + curr, 0);
  let answer = right;

  while (left <= right) {
    const capacity = left + Math.floor((right - left) / 2);

    let daysNeded = 1;
    let load = 0;

    for (let i = 0; i < weights.length; i++) {
      load += weights[i];

      if (load > capacity) {
        daysNeded++;
        load = weights[i];
      }
    }

    if (daysNeded <= days) {
      answer = capacity;
      right = capacity - 1;
    } else {
      left = capacity + 1;
    }
  }

  return answer;
}

module.exports = shipWithinDays;
