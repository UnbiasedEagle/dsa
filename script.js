/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const char of s) {
    if (!Number.isNaN(char)) {
      if (Number(char) > largest) {
        secondLargest = largest;
        largest = Number(char);
      } else if (Number(char) > secondLargest && Number(char) !== largest) {
        secondLargest = Number(char);
      }
    }
  }

  return secondLargest === -Infinity ? -1 : secondLargest;
};
