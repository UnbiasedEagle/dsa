/*
Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/description/

Input:
- `s`: a string of digits and English letters

Goal:
- find the longest substring of `s` that is a palindrome

Output:
- that substring, as a string

Rules:
- a substring is a contiguous part of `s`
- every palindrome has a center: one character (odd length, "aba") or the gap between two characters (even length, "abba")
- from a center, expand outward while the two characters match
- so try every index as an odd center, and every index with the next one as an even center
- keep the start and length of the longest palindrome found
- if there are several longest answers, any one is accepted

Constraints:
- 1 <= s.length <= 1000
- s consists of digits and English letters

Examples:
longestPalindrome("babad"); // "bab" ("aba" is also accepted)
longestPalindrome("cbbd");  // "bb"
longestPalindrome("a");     // "a"

Time: O(n^2)
Space: O(1)
*/

function longestPalindrome(s) {
  function helper(left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--;
        right++;
      } else {
        return right - left - 1;
      }
    }
    return right - left - 1;
  }

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    const curr1 = helper(i, i);
    const curr2 = helper(i, i + 1);

    if (curr1 > maxLength) {
      const newStart = i - Math.floor(curr1 / 2);
      start = newStart;
      maxLength = curr1;
    }

    if (curr2 > maxLength) {
      const newStart = i - Math.floor(curr2 / 2) + 1;
      start = newStart;
      maxLength = curr2;
    }
  }

  return s.slice(start, start + maxLength);
}

module.exports = longestPalindrome;
