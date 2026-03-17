/**
 * @param {string} digits
 * @return {string[]}
 */

const letterMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  const result = [];
  if (digits.length === 0) return result;
  backtrack(digits, 0, [], result);
  return result;
};

function backtrack(digits, index, curr, result) {
  if (index === digits.length) {
    result.push(curr.join(""));
    return;
  }
  const letters = letterMap[digits[index]];
  for (let i = 0; i < letters.length; i++) {
    curr.push(letters[i]);
    backtrack(digits, index + 1, curr, result);
    curr.pop();
  }
}
