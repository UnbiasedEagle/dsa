/*
Longest Substring with K Uniques
https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1

Input:
- `s`: a string of lowercase English letters
- `k`: a number, how many distinct characters are allowed

Goal:
- find the length of the longest substring that has exactly `k` distinct characters

Output:
- that length, or -1 if no such substring exists

Rules:
- a substring is a contiguous part of `s`
- use a variable size sliding window with `left` and `right`
- keep a Map of character -> count for the characters inside the window
- the number of distinct characters in the window is the Map's size
- move `right` forward and add its character to the Map
- while the Map has more than `k` distinct characters, shrink from the left: lower the count of s[left], and delete the key when it reaches 0
- only when the Map has exactly `k` distinct characters is the window a valid answer, so update the best length then
- if no window ever had exactly `k` distinct characters, return -1

Constraints:
- 1 <= s.length <= 10^5
- 1 <= k <= 26
- s consists of lowercase English letters

Examples:
longestKSubstr("aabacbebebe", 3); // 7, "cbebebe"
longestKSubstr("aaaa", 2);        // -1, only 1 distinct character exists
longestKSubstr("abc", 1);         // 1

Time: O(n)
Space: O(k)
*/

function longestKSubstr(s, k) {
  const window = new Map();

  let left = 0;
  let maxLength = -1;

  let right = 0;

  while (right < s.length) {
    window.set(s[right], (window.get(s[right]) || 0) + 1);

    while (window.size > k) {
      window.set(s[left], (window.get(s[left]) || 0) - 1);

      if (window.get(s[left]) === 0) {
        window.delete(s[left]);
      }

      left++;
    }

    if (window.size === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    right++;
  }

  return maxLength;
}

module.exports = longestKSubstr;
