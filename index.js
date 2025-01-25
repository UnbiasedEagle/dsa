class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
      if (map.has(s[right])) {
        left = Math.max(left, map.get(s[right]) + 1);
      }
      map.set(s[right], right);
      result = Math.max(result, right - left + 1);
    }

    return result;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
