/*
Koko Eating Bananas
https://leetcode.com/problems/koko-eating-bananas/description/

Input:
- `piles`: an array of positive integers, piles[i] is the number of bananas in pile i
- `h`: the number of hours before the guards come back

Goal:
- find the smallest eating speed `k` (bananas per hour) that lets Koko eat all the bananas within `h` hours

Output:
- that minimum `k`, as a number

Rules:
- each hour Koko picks one pile and eats up to `k` bananas from it
- if the pile has fewer than `k` bananas, she finishes it and does not eat from another pile that hour
- so a pile of size p takes Math.ceil(p / k) hours at speed k
- the total hours at speed k is the sum of Math.ceil(p / k) over all piles
- a faster speed never takes more hours, so "can finish in h hours" is false for small speeds and true from some speed upward
- that makes the speeds 1..max(piles) a sorted yes/no line, so binary search on the answer
- the smallest possible speed is 1, and max(piles) always works (one pile per hour), so search between them
- when a speed works, remember it and try a smaller one; when it does not, try a bigger one

Constraints:
- 1 <= piles.length <= 10^4
- piles.length <= h <= 10^9
- 1 <= piles[i] <= 10^9

Examples:
minEatingSpeed([3, 6, 7, 11], 8);       // 4
minEatingSpeed([30, 11, 23, 4, 20], 5); // 30
minEatingSpeed([30, 11, 23, 4, 20], 6); // 23

Time: O(n * log m), where n is piles.length and m is the biggest pile
Space: O(1)
*/

function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let answer = right;

  while (left <= right) {
    const speed = left + Math.floor((right - left) / 2);

    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }

    if (hours <= h) {
      answer = speed;
      right = speed - 1;
    } else {
      left = speed + 1;
    }
  }

  return answer;
}

module.exports = minEatingSpeed;
