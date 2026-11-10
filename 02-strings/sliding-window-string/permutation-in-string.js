/*
Permutation in String
https://leetcode.com/problems/permutation-in-string/description/

Input:
- `s1`: a string of lowercase English letters, the pattern
- `s2`: a string of lowercase English letters, the text

Goal:
- check if some substring of `s2` is a permutation of `s1`

Output:
- true if one exists, otherwise false

Rules:
- a permutation uses exactly the same letters as `s1`, with the same counts, in any order
- so every window in `s2` has length s1.length, a fixed size sliding window
- count the letters of `s1` once
- count the letters of the current window, and update it as the window slides: add the new right character, remove the old left character
- the window is a permutation when both counts are equal
- stop and return true at the first match

Constraints:
- 1 <= s1.length, s2.length <= 10^4
- s1 and s2 consist of lowercase English letters

Examples:
checkInclusion("ab", "eidbaooo");  // true, "ba"
checkInclusion("ab", "eidboaoo");  // false

Time: O(n)
Space: O(1)
*/

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  function helper(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > 0 && arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    const idx1 = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
    s1Count[idx1]++;
    const idx2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
    s2Count[idx2]++;
  }

  if (helper(s1Count, s2Count)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    const idx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
    s2Count[idx]++;
    const r = s2[i - s1.length].charCodeAt(0) - 'a'.charCodeAt(0);
    s2Count[r]--;

    if (helper(s1Count, s2Count)) {
      return true;
    }
  }

  return false;
}

module.exports = checkInclusion;
