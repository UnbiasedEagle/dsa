function maximumContinuousSequence(arr, k) {
  let left = 0;
  let leftIndex = null;
  let maxWindow = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      count++;
    }

    while (count > k) {
      if (arr[left] === 0) {
        count--;
      }
      left++;
    }

    const window = right - left + 1;

    if (window > maxWindow) {
      maxWindow = window;
      leftIndex = left;
    }
  }

  if (leftIndex === null) {
    return;
  }

  console.log(arr.slice(leftIndex, leftIndex + maxWindow));
}

maximumContinuousSequence([1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0], 2);
