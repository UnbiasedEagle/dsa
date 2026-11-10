/*
Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/description/

Input:
- `s`: a string of English letters, the text
- `t`: a string of English letters, the characters we need

Goal:
- find the shortest substring of `s` that contains every character of `t`, including duplicates

Output:
- that substring, or "" if no such substring exists

Rules:
- if `t` has two "a", the window needs at least two "a"
- extra characters in the window are fine
- use a variable size sliding window with `left` and `right`
- count what `t` needs in a Map `need`
- keep a number `missing`, how many characters the window still lacks, starting at t.length
- expand: move `right` forward, and if s[right] is still needed, lower `missing`
- when `missing` is 0 the window is valid: shrink from the left as far as it stays valid, and record the shortest window
- shrink: if the character leaving is needed, `missing` goes up again and the window is no longer valid, so go back to expanding
- the answer is unique

Constraints:
- 1 <= s.length, t.length <= 10^5
- s and t consist of uppercase and lowercase English letters

Examples:
minWindow("ADOBECODEBANC", "ABC"); // "BANC"
minWindow("a", "a");               // "a"
minWindow("a", "aa");              // "", t needs two "a" but s has one

Time: O(n + m), where m is t.length
Space: O(k), where k is the number of distinct characters in t
*/

function minWindow(s, t) {
  if (t.length > s.length) {
    return '';
  }

  const need = new Map();

  for (const char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let missing = t.length;

  let left = 0;

  let right = 0;

  let bestStart = 0;
  let bestLength = Infinity;

  while (right < s.length) {
    if (need.has(s[right])) {
      need.set(s[right], (need.get(s[right]) || 0) - 1);

      if (need.get(s[right]) >= 0) {
        missing--;
      }
    }

    while (missing === 0) {
      const length = right - left + 1;
      if (length < bestLength) {
        bestStart = left;
        bestLength = length;
      }

      if (need.has(s[left])) {
        need.set(s[left], need.get(s[left]) + 1);
        if (need.get(s[left]) > 0) {
          missing++;
        }
      }

      left++;
    }

    right++;
  }

  if (bestLength === Infinity) {
    return '';
  }

  return s.slice(bestStart, bestStart + bestLength);
}

module.exports = minWindow;
