/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vovels = ['a', 'e', 'i', 'o', 'u'];

  let maxVovelCharCount = 0;
  let maxConsonantCharCount = 0;

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (vovels.includes(key)) {
      maxVovelCharCount = Math.max(maxVovelCharCount, value);
    } else {
      maxConsonantCharCount = Math.max(maxConsonantCharCount, value);
    }
  }

  return maxVovelCharCount + maxConsonantCharCount;
};
