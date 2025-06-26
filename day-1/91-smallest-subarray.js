function smallestSubarray(arr, k) {
  let currentSum = 0;
  let left = 0;
  let right = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  while (right < arr.length) {
    currentSum += arr[right];

    while (currentSum > k && left <= right) {
      const length = right - left + 1;
      if (length < minLength) {
        minLength = length;
      }
      currentSum -= arr[left++];
    }

    right++;
  }

  if (minLength === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return minLength;
}

console.log(smallestSubarray([1, 2, 3, 4, 5, 6, 7, 8], 7));
