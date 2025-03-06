class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */

  backtrack(s, index, current, result) {
    if (index === s.length) {
      result.push(current.slice());
      return;
    }

    for (let i = index; i < s.length; i++) {
      const str = s.substring(index, i + 1);

      if (this.isPalindrome(str)) {
        current.push(str);
        this.backtrack(s, i + 1, current, result);
        current.pop();
      }
    }
  }

  isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }

  partition(s) {
    const result = [];
    const current = [];

    this.backtrack(s, 0, current, result);

    return result;
  }
}
