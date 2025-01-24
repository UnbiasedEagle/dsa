class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  isAlphaNumeric(char) {
    return char.match(/^[a-z0-9]+$/i);
  }

  isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
      while (start <= end && !this.isAlphaNumeric(s[start])) {
        start++;
      }
      while (start <= end && !this.isAlphaNumeric(s[end])) {
        end--;
      }
      if (start <= end && s[start].toLowerCase() !== s[end].toLowerCase()) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }
}
