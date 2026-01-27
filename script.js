class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  subarraySum(nums, k) {
    let sum = 0;
    const sumMap = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (sum === k) {
        count++;
      }

      const comp = sum - k;

      count += map.get(comp) || 0;

      map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
  }
}
