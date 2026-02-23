/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !isAlphaNumeric(s[start])) {
      start++;
    }

    while (start < end && !isAlphaNumeric(s[end])) {
      end--;
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

function isAlphaNumeric(char) {
  return /^[a-zA-Z0-9]+$/.test(char);
}
