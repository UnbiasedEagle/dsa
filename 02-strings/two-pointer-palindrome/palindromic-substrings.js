/*
Palindromic Substrings
https://leetcode.com/problems/palindromic-substrings/description/

Input:
- `s`: a string of lowercase English letters

Goal:
- count how many substrings of `s` are palindromes

Output:
- that count, as a number

Rules:
- a substring is a contiguous part of `s`
- substrings at different positions count separately, even if the text is the same
- a single character is always a palindrome
- every palindrome has a center: one character (odd length) or the gap between two characters (even length)
- from a center, expand outward while the two characters match
- every successful expansion step is one more palindrome, so add 1 to the count each time

Constraints:
- 1 <= s.length <= 1000
- s consists of lowercase English letters

Examples:
countSubstrings("abc"); // 3, "a", "b", "c"
countSubstrings("aaa"); // 6, "a", "a", "a", "aa", "aa", "aaa"

Time: O(n^2)
Space: O(1)
*/

function countSubstrings(s) {
  function helper(left, right) {
    let count = 0;
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count++;
        left--;
        right++;
      } else {
        return count;
      }
    }
    return count;
  }

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const total1 = helper(i, i);
    const total2 = helper(i, i + 1);
    total += total1 + total2;
  }

  return total;
}

module.exports = countSubstrings;
