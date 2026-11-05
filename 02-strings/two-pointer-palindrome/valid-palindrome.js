/*
Valid Palindrome
https://leetcode.com/problems/valid-palindrome/description/

Input:
- `s`: a string that may contain letters, digits, spaces and punctuation

Goal:
- check if the string reads the same forward and backward

Output:
- true if it is a palindrome, otherwise false

Rules:
- ignore every character that is not a letter or a digit
- ignore upper and lower case, "A" and "a" are the same
- an empty string, or a string with only symbols, counts as a palindrome
- compare from the outside in with two pointers, skipping characters that don't count
- avoid building a cleaned copy of the string, so space stays O(1)

Constraints:
- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters

Examples:
isPalindrome("A man, a plan, a canal: Panama"); // true
isPalindrome("race a car");                     // false
isPalindrome(" ");                              // true

Time: O(n)
Space: O(1)
*/

function isPalindrome(s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const regex = /[0-9a-z]/i;

    while (left < right && !regex.test(s[left])) {
      left++;
    }
    while (left < right && !regex.test(s[right])) {
      right--;
    }

    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
