function equilibriumIndex1(arr) {
  const left = Array(arr.length).fill(0);
  let leftSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    left[i] = leftSum;
    leftSum += arr[i];
  }

  let rightSum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (rightSum === left[i]) {
      console.log(i);
    }
    rightSum += arr[i];
  }
}

function equilibriumIndex2(arr) {
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
  }

  let rightSum = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    leftSum -= arr[i];

    if (leftSum === rightSum) {
      console.log(i);
    }

    rightSum += arr[i];
  }
}

console.log(equilibriumIndex2([0, -3, 5, -4, -2, 3, 1, 0]));
