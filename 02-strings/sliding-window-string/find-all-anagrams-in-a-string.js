/*
Find All Anagrams in a String
https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

Input:
- `s`: a string of lowercase English letters
- `p`: a string of lowercase English letters

Goal:
- find every start index in `s` where a substring is an anagram of `p`

Output:
- an array of those start indices, in any order

Rules:
- an anagram uses exactly the same letters as `p`, with the same counts, in any order
- so every window has length p.length, a fixed size sliding window
- count the letters of `p` once
- count the letters of the current window, and update it as the window slides: add the new right character, remove the old left character
- the window is an anagram when both counts are equal
- 26 letters is a constant, so comparing two counts is O(1)

Constraints:
- 1 <= s.length, p.length <= 3 * 10^4
- s and p consist of lowercase English letters

Examples:
findAnagrams("cbaebabacd", "abc"); // [0, 6], "cba" and "bac"
findAnagrams("abab", "ab");        // [0, 1, 2], "ab", "ba", "ab"

Time: O(n)
Space: O(1)
*/

function findAnagrams(s, p) {
  if (p.length > s.length) {
    return [];
  }

  const pCount = Array(26).fill(0);
  const windowCount = Array(26).fill(0);

  const result = [];

  for (let i = 0; i < p.length; i++) {
    const idx1 = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
    pCount[idx1]++;
    const idx2 = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    windowCount[idx2]++;
  }

  function helper(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > 0 && arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  if (helper(pCount, windowCount)) {
    result.push(0);
  }

  for (let right = p.length; right < s.length; right++) {
    const idx1 = s[right].charCodeAt(0) - 'a'.charCodeAt(0);
    windowCount[idx1]++;
    const idx2 = s[right - p.length].charCodeAt(0) - 'a'.charCodeAt(0);
    windowCount[idx2]--;

    if (helper(pCount, windowCount)) {
      result.push(right - p.length + 1);
    }
  }

  return result;
}

module.exports = findAnagrams;
