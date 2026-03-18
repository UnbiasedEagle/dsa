/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  backtrack(0, [], result, s);
  return result;
};

function backtrack(index, current, result, s) {
  if (index === s.length) {
    result.push([...current]);
    return;
  }
  for (let i = index; i < s.length; i++) {
    let sub = s.slice(index, i + 1);
    if (isPalindrome(sub)) {
      current.push(sub);
      backtrack(i + 1, current, result, s);
      current.pop();
    }
  }
}

function isPalindrome(sub) {
  let left = 0;
  let right = sub.length - 1;
  while (left < right) {
    if (sub[left] !== sub[right]) return false;
    left++;
    right--;
  }
  return true;
}
