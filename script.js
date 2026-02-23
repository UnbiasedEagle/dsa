/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let end = num.length - 1;

  while (end >= 0) {
    if (num[end] % 2 !== 0) {
      return num.substring(0, end + 1);
    }
    end--;
  }

  return '';
};
