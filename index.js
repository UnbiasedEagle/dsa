class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const arr = [];
    for (let i = 0; i < position.length; i++) {
      arr.push({
        position: position[i],
        time: (target - position[i]) / speed[i],
      });
    }
    arr.sort((a, b) => b.position - a.position);
    let fleet = 1;
    let maxTime = arr[0].time;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].time > maxTime) {
        fleet++;
        maxTime = arr[i].time;
      }
    }
    return fleet;
  }
}

// Time complexity: O(nlogn)
// Space complexity: O(n)
