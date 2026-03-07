/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let maxLength = 0;
  const freqMap = Array(26).fill(0);
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const charCode = char.charCodeAt(0) - "A".charCodeAt(0);
    freqMap[charCode]++;
    maxFreq = Math.max(maxFreq, freqMap[charCode]);

    while (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      const leftCharCode = leftChar.charCodeAt(0) - "A".charCodeAt(0);
      freqMap[leftCharCode]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
