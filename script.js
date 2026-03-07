/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const freqMap = Array(26).fill(0);
  for (let char of s1) {
    freqMap[char.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    while (right - left + 1 > s1.length) {
      const leftChar = s2[left];
      const leftCharCode = leftChar.charCodeAt(0) - "A".charCodeAt(0);
      freqMap[leftCharCode]++;
      left++;
    }

    const char = s2[right];
    const charCode = char.charCodeAt(0) - "A".charCodeAt(0);
    freqMap[charCode]--;

    if (right - left + 1 === s1.length) {
      let allZero = true;
      for (let i = 0; i < 26; i++) {
        if (freqMap[i] !== 0) {
          allZero = false;
          break;
        }
      }
      if (allZero) return true;
    }
  }

  return false;
};
