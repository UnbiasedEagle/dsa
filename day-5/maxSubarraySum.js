function maxSubarraySum(arr) {
  let result = arr[0];
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([-8, -3, -6, -2, -5, -4]));
