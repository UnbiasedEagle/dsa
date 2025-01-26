class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let left = 0;
    let right = 0;
    const freq = Array.from({ length: 26 }, () => 0);
    let result = 0;
    while (right < s.length) {
      freq[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
      const maxFreq = Math.max(...freq);
      while (right - left + 1 - maxFreq > k) {
        freq[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
        left++;
      }
      result = Math.max(result, right - left + 1);
      right++;
    }
    return result;
  }
}
