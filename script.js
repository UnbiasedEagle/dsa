class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
      const freqArr = new Array(26).fill(0);
      for (const ch of str) {
        freqArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      const key = freqArr.join('#');
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
    return Array.from(map.values());
  }
}
