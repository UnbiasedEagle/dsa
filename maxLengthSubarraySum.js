// Time Complexity: O(n^2)
function maxLengthSubarraySum1(arr, target) {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

function maxLengthSubarraySum2(arr, target) {
  const map = new Map();
  map.set(0, -1);

  let sum = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum - target)) {
      maxLength = Math.max(maxLength, i - map.get(sum - target));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLength;
}

console.log(maxLengthSubarraySum2([5, 6, -5, 5, 3, 5, 3, -2, 0], 8));
