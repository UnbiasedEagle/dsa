class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */

  isEqual(freq1, freq2) {
    for (const [char, count] of freq1.entries()) {
      if (!freq2.has(char) || freq2.get(char) < count) {
        return false;
      }
    }
    return true;
  }

  minWindow(s, t) {
    if (t.length > s.length) {
      return '';
    }
    const freq1 = new Map();
    const freq2 = new Map();

    // Build frequency map for target string
    for (const char of t) {
      freq1.set(char, (freq1.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let startIndex = -1;
    let minLength = Infinity;

    while (right < s.length) {
      // Add character to window frequency map
      const rightChar = s[right];
      freq2.set(rightChar, (freq2.get(rightChar) || 0) + 1);

      while (left <= right && this.isEqual(freq1, freq2)) {
        const currentLength = right - left + 1;
        if (currentLength < minLength) {
          minLength = currentLength;
          startIndex = left;
        }
        // Remove character from window frequency map
        const leftChar = s[left];
        freq2.set(leftChar, freq2.get(leftChar) - 1);
        if (freq2.get(leftChar) === 0) {
          freq2.delete(leftChar);
        }
        left++;
      }

      right++;
    }

    if (startIndex === -1) {
      return '';
    }

    return s.substring(startIndex, startIndex + minLength);
  }
}

// Time complexity: O(n)
// Space complexity: O(1)
