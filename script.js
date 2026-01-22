class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
      while (left <= right && !this.isAlphaNumeric(s[left])) {
        left++;
      }
      while (left <= right && !this.isAlphaNumeric(s[right])) {
        right--;
      }
      if (left > right) {
        break;
      }
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  isAlphaNumeric(char) {
    return (
      (char >= '0' && char <= '9') ||
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z')
    );
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
