function kSum(arr, k) {
  let currentSum = 0;
  let left = 0;
  let leftIdx = null;
  let rightIdx = null;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > k && left <= right) {
      currentSum -= arr[left++];
    }

    if (currentSum === k) {
      leftIdx = left;
      rightIdx = right;
      break;
    }
  }

  return [leftIdx, rightIdx];
}

console.log(kSum([0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10], -3));
