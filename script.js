function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return null;
  }

  if (!Number.isFinite(arr[0])) {
    return false;
  }

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (!Number.isFinite(arr[i])) {
      return false;
    }
    if (arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
}

module.exports = { findLargest };
