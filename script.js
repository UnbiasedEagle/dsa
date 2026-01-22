class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const comp = target - nums[i];
      if (map.has(comp)) {
        return [map.get(comp), i];
      }
      map.set(nums[i], i);
    }

    return [];
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
