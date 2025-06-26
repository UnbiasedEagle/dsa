function findSmallestWindow(arr) {
  let right = -1;
  let maxSoFar = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxSoFar) {
      maxSoFar = arr[i];
    }

    if (arr[i] < maxSoFar) {
      right = i;
    }
  }

  let left = -1;
  let minSoFar = Number.MAX_SAFE_INTEGER;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < minSoFar) {
      minSoFar = arr[i];
    }

    if (arr[i] > minSoFar) {
      left = i;
    }
  }

  if (left === -1) {
    return;
  }

  return [left, right];
}

console.log(findSmallestWindow([1, 3, 2, 7, 5, 6, 4, 8]));
