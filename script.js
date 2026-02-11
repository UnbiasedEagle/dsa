/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let copy = Math.abs(x);
  let reverse = 0;
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(2, 31) * -1;

  while (copy > 0) {
    if (
      reverse > Math.trunc(INT_MAX / 10) ||
      reverse < Math.trunc(INT_MIN / 10)
    ) {
      return 0;
    }
    reverse = reverse * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return x < 0 ? -reverse : reverse;
};
