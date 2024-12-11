class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    digits.reverse();
    let carry = 1;
    let i = 0;

    while (carry > 0 || i < digits.length) {
      let sum = carry;
      if (i < digits.length) {
        sum += digits[i];
      }
      carry = Math.floor(sum / 10);

      if (i < digits.length) {
        digits[i] = sum % 10;
      } else {
        digits.push(sum % 10);
      }

      i++;
    }

    digits.reverse();

    return digits;
  }
}
