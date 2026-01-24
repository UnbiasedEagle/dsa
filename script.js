class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (i <= k) {
        if (map.has(nums[i])) {
          return true;
        }
        map.set(nums[i], 1);
      } else {
        const element = nums[i - k - 1];
        map.set(element, map.get(element) - 1);

        if (map.get(element) === 0) {
          map.delete(element);
        }

        if (map.has(nums[i])) {
          return true;
        }
        map.set(nums[i], 1);
      }
    }

    return false;
  }
}
