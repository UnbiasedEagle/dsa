class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
      if (!map.has(s[right]) || map.get(s[right]) < left) {
        map.set(s[right], right);
      } else {
        left = map.get(s[right]) + 1;
        map.set(s[right], right);
      }
      const currentLength = right - left + 1;
      maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
  }
}
