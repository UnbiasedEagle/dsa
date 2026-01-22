class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
      const freqArr = Array.from({ length: 26 }, () => 0);

      for (const char of str) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[idx]++;
      }

      const key = freqArr.join('#');

      if (map.has(key)) {
        map.get(key).push(str);
      } else {
        map.set(key, [str]);
      }
    }

    return Array.from(map.values());
  }
}

// Time Complexity: O(n*m)
// Space Complexity: O(n)
