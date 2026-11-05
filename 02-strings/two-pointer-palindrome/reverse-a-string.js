/*
Reverse a String
https://leetcode.com/problems/reverse-string/description/

Input:
- `s`: an array of characters, e.g. ["h", "e", "l", "l", "o"]

Goal:
- reverse the characters in the array

Output:
- nothing, modify `s` in place

Rules:
- don't create a second array
- use O(1) extra space
- swap pairs of characters from the outside in, until the two ends meet

Constraints:
- 1 <= s.length <= 10^5
- s[i] is a printable ASCII character

Examples:
reverseString(["h", "e", "l", "l", "o"]);      // s becomes ["o", "l", "l", "e", "h"]
reverseString(["H", "a", "n", "n", "a", "h"]); // s becomes ["h", "a", "n", "n", "a", "H"]

Time: O(n)
Space: O(1)
*/

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

module.exports = reverseString;
