class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let result = end;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (this.canFinish(piles, mid, h)) {
        result = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  }

  canFinish(piles, k, h) {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours <= h;
  }
}
