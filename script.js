class Solution {
  /**
   * @param {number[]} arr
   * @param {number} k
   * @param {number} x
   * @return {number[]}
   */
  findClosestElements(arr, k, x) {
    let ws = 0;
    let we = arr.length - 1;

    while (we - ws + 1 > k) {
      const diff1 = Math.abs(x - arr[ws]);
      const diff2 = Math.abs(x - arr[we]);

      if (diff1 > diff2) {
        ws++;
      } else if (diff2 > diff1) {
        we--;
      } else {
        we--;
      }
    }

    return arr.slice(ws, we + 1);
  }
}
