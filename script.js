/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let dollar5 = 0;
  let dollar10 = 0;

  for (const bill of bills) {
    if (bill === 5) {
      dollar5++;
    } else if (bill === 10) {
      if (dollar5 === 0) {
        return false;
      }
      dollar5--;
      dollar10++;
    } else {
      if (dollar10 > 0 && dollar5 > 0) {
        dollar10--;
        dollar5--;
      } else if (dollar5 >= 3) {
        dollar5 -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
