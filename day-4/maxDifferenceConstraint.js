function maxDifferenceConstraint(arr) {
  let maxSofar = arr[arr.length - 1];
  let maxDiff = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < maxSofar) {
      maxDiff = Math.max(maxDiff, maxSofar - arr[i]);
    } else {
      maxSofar = arr[i];
    }
  }

  return maxDiff;
}

console.log(maxDifferenceConstraint([2, 7, 9, 5, 1, 3, 5]));
