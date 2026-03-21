/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const endIndex = Array(26).fill(-1);
  for (let i = s.length - 1; i >= 0; i--) {
    const code = s.charCodeAt(i) - "a".charCodeAt(0);
    if (endIndex[code] === -1) {
      endIndex[code] = i;
    }
  }

  const result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, endIndex[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};
