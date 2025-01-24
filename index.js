class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 0;
        while (numSet.has(currentNum)) {
          currentNum += 1;
          currentStreak += 1;
        }
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
    return longestStreak;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
