function countNegatives(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let result = 0;

  for (const num of arr) {
    if (!Number.isFinite(num)) {
      return false;
    }
    if (num < 0) {
      result++;
    }
  }

  return result;
}

module.exports = { countNegatives };
