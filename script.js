class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    const freq1 = Array.from({ length: 26 }, () => 0);
    const freq2 = Array.from({ length: 26 }, () => 0);

    for (const char of s1) {
      const idx = char.charCodeAt(0) - "a".charCodeAt(0);
      freq1[idx]++;
    }

    for (let i = 0; i < s2.length; i++) {
      if (i < s1.length) {
        const idx = s2[i].charCodeAt(0) - "a".charCodeAt(0);
        freq2[idx]++;
        let found = true;
        for (let j = 0; j < 26; j++) {
          if (freq1[j] !== freq2[j]) {
            found = false;
            break;
          }
        }
        if (found) {
          return true;
        }
      } else {
        const idxToRemove = s2[i - s1.length].charCodeAt(0) - "a".charCodeAt(0);
        freq2[idxToRemove]--;
        const idx = s2[i].charCodeAt(0) - "a".charCodeAt(0);
        freq2[idx]++;
        let found = true;
        for (let j = 0; j < 26; j++) {
          if (freq1[j] !== freq2[j]) {
            found = false;
            break;
          }
        }
        if (found) {
          return true;
        }
      }
    }

    return false;
  }
}
