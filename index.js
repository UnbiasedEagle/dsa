class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const result = [];
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      const freq = Array.from({ length: 26 }, () => 0);

      for (let j = 0; j < str.length; j++) {
        freq[str[j].charCodeAt(0) - 97]++;
      }

      const key = freq.join('#');
      if (map.has(key)) {
        map.get(key).push(str);
      } else {
        map.set(key, [str]);
      }
    }

    Array.from(map.values()).forEach((v) => {
      result.push(v);
    });

    return result;
  }
}
