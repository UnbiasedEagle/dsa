function maximumProdTwoInteger1(arr) {
  let max1 = arr[0];
  let max2 = Number.MIN_SAFE_INTEGER;

  let min1 = arr[0];
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }

    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }

  if (max1 * max2 > min1 * min2) {
    return max1 * max2;
  }

  return min1 * min2;
}

console.log(maximumProdTwoInteger1([-10, -3, 5, 6, -2]));
