/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;

  let lCount = 0;
  let rCount = 0;

  let i = 0;

  while (i < s.length) {
    if (s[i] === 'L') {
      lCount++;
    } else {
      rCount++;
    }
    if (lCount === rCount) {
      count++;
      lCount = 0;
      rCount = 0;
    }
    i++;
  }

  return count;
};
