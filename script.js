class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
      if (s[left] !== s[right]) {
        return (
          this.checkPalindrome(s, left + 1, right) ||
          this.checkPalindrome(s, left, right - 1)
        );
      }
      left++;
      right--;
    }

    return true;
  }

  checkPalindrome(s, left, right) {
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
