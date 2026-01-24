class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freqMap = new Map();

    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const arr = Array.from({ length: nums.length + 1 }, () => []);

    for (const [key, value] of freqMap) {
      arr[value].push(key);
    }

    const result = [];
    let idx = nums.length;
    while (k > 0) {
      let i = 0;
      while (k > 0 && i < arr[idx].length) {
        result.push(arr[idx][i]);
        i++;
        k--;
      }
      idx--;
    }

    return result;
  }
}
