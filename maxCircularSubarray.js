function maxCircularSubarray(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  const sum1 = linearMaxSum(arr);
  const sum2 = circularMaxSum(arr.map((a) => a * -1));

  return Math.max(sum1, total - sum2);
}

function circularMaxSum(arr) {
  return linearMaxSum(arr) * -1;
}

function linearMaxSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxCircularSubarray([2, 1, -5, 4, -3, 1, -3, 4, -1]));
