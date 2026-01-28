class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const freq = Array.from({ length: 26 }, () => 0);

    let maxLength = 0;

    let left = 0;

    for (let right = 0; right < s.length; right++) {
      const idx = s[right].charCodeAt(0) - "A".charCodeAt(0);
      freq[idx]++;

      let diff = right - left + 1 - Math.max(...freq);
      while (left < right && diff > k) {
        const leftIdx = s[left].charCodeAt(0) - "A".charCodeAt(0);
        freq[leftIdx]--;
        left++;
        diff = right - left + 1 - Math.max(...freq);
      }

      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
