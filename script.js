/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = '';

  let i = 0;

  while (i < s.length) {
    if (i + 2 * k <= s.length) {
      let start = i;
      let end = i + k - 1;
      result += s
        .substring(start, end + 1)
        .split('')
        .reverse()
        .join('');
      result += s.substring(end + 1, start + 2 * k);
      i += 2 * k;
    } else if (i + k > s.length) {
      result += s.substring(i, s.length).split('').reverse().join('');
      i += k;
    } else {
      result += s
        .substring(i, i + k)
        .split('')
        .reverse()
        .join('');
      result += s.substring(i + k, s.length);
      i = s.length;
    }
  }

  return result;
};
