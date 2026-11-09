/*
Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Input:
- `s`: a string of letters, digits, symbols and spaces

Goal:
- find the length of the longest substring that has no repeated character

Output:
- that length, as a number

Rules:
- a substring is a contiguous part of `s`
- use a variable size sliding window with `left` and `right`
- keep a set of the characters inside the window
- move `right` forward and add its character to the window
- if that character is already in the window, shrink from the left, removing characters, until the duplicate is gone
- after each step the window has all unique characters, so update the best length

Constraints:
- 0 <= s.length <= 5 * 10^4
- s consists of English letters, digits, symbols and spaces

Examples:
lengthOfLongestSubstring("abcabcbb"); // 3, "abc"
lengthOfLongestSubstring("bbbbb");    // 1, "b"
lengthOfLongestSubstring("pwwkew");   // 3, "wke"

Time: O(n)
Space: O(min(n, k)), where k is the size of the character set
*/

function lengthOfLongestSubstring(s) {
  const seen = new Set();

  let left = 0;
  let maxLength = 0;

  let right = 0;
  while (right < s.length) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    const curr = right - left + 1;
    maxLength = Math.max(curr, maxLength);
    seen.add(s[right]);
    right++;
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
