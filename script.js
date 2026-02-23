/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const freq = Array(26).fill(0);
    for (const char of str) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = freq.join(",");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
};
