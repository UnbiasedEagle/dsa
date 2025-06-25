function printMaxContinousSubarraySum(arr) {
  let maxSum = arr[0];
  let start = 0;
  let end = 0;
  let currentSum = arr[0];
  let beg = 0;

  for (let i = 1; i < arr.length; i++) {
    currentSum += arr[i];

    if (arr[i] > currentSum) {
      currentSum = arr[i];
      beg = i;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = beg;
      end = i;
    }
  }

  console.log(arr.slice(start, end + 1));
}

printMaxContinousSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
