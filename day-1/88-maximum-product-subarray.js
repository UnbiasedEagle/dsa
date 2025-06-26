function maximumProduct(arr) {
  let result = arr[0];
  let maxi = arr[0];
  let mini = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const temp = maxi;
    maxi = Math.max(arr[i], Math.max(arr[i] * maxi, arr[i] * mini));
    mini = Math.min(arr[i], Math.min(arr[i] * temp, arr[i] * mini));
    result = Math.max(result, maxi);
  }

  return result;
}

console.log(maximumProduct([-6, 4, -5, 8, -10, 0, 8]));
