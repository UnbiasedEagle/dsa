class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s2.length < s1.length) {
      return false;
    }
    const freq = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < s1.length; i++) {
      freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < s2.length; i++) {
      if (i < s1.length) {
        freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      } else {
        freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
      }
      if (freq.every((count) => count === 0)) {
        return true;
      }
    }
    return false;
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
