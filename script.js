class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
      const char1 = s[i];
      const char2 = t[i];

      map.set(char1, (map.get(char1) || 0) + 1);
      map.set(char2, (map.get(char2) || 0) - 1);
    }

    return Array.from(map.values()).every((entry) => entry === 0);
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
