/*
Valid Palindrome II
https://leetcode.com/problems/valid-palindrome-ii/description/

Input:
- `s`: a string of lowercase English letters

Goal:
- check if the string can become a palindrome by deleting at most one character

Output:
- true if it is already a palindrome, or becomes one after deleting one character, otherwise false

Rules:
- compare from the outside in with two pointers
- while the characters match, keep moving inward
- at the first mismatch you get one chance: delete the left character or delete the right character
- after deleting, the rest of the string between the pointers must be a palindrome
- try both choices, and return true if either one works
- use a helper that checks if s[left..right] is a palindrome

Constraints:
- 1 <= s.length <= 10^5
- s consists of lowercase English letters

Examples:
validPalindrome("aba");   // true
validPalindrome("abca");  // true, delete "c" or "b"
validPalindrome("abc");   // false

Time: O(n)
Space: O(1)
*/

function validPalindrome(s) {
  function helper(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      const res1 = helper(left + 1, right);
      const res2 = helper(left, right - 1);
      return res1 || res2;
    }
  }

  return true;
}

module.exports = validPalindrome;
