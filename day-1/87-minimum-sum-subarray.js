function minimumSumSubarray(arr, k) {
  if (arr.length === 0 || k >= arr.length) {
    return;
  }

  let windowSum = 0;
  let minWindowSum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (i >= k) {
      windowSum -= arr[i - k];
    }
    windowSum += arr[i];

    if (i >= k - 1) {
      minWindowSum = Math.min(minWindowSum, windowSum);
    }
  }

  return minWindowSum;
}

console.log(minimumSumSubarray([10, 4, 2, 5, 6, 3, 8, 1], 3));
