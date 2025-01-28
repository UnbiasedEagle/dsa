class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let start = 0;
    let end = Math.max(...piles);

    let result = end;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      let totalTime = 0;
      for (const pile of piles) {
        totalTime += Math.ceil(pile / mid);
      }
      if (totalTime <= h) {
        result = Math.min(result, mid);
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  }
}
