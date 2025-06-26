function longestBitonicSubarray(arr) {
  const increasing = Array(arr.length).fill(1);
  const decreasing = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      increasing[i] = increasing[i - 1] + 1;
    }
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      decreasing[i] = decreasing[i + 1] + 1;
    }
  }

  let result = 1;
  let beg = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = increasing[i] + decreasing[i] - 1;

    if (current > result) {
      result = current;
      beg = i - increasing[i] + 1;
      end = i + decreasing[i] - 1;
    }
  }

  console.log(result);
  console.log(beg, end);
}

longestBitonicSubarray([3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4]);
