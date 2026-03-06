/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  const map = new Map();
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (!map.has(s[right]) || map.get(s[right]) < left) {
      map.set(s[right], right);
    } else {
      left = map.get(s[right]) + 1;
      map.set(s[right], right);
    }
    maxLength = Math.max(right - left + 1, maxLength);
  }

  return maxLength;
};
