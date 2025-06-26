function maxContinousSequence(arr) {
  let count = 0;
  let maxCount = 0;
  let prevIndex = -1;
  let maxIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      count = i - prevIndex;
      prevIndex = i;
    }

    if (count > maxCount) {
      maxCount = count;
      maxIndex = prevIndex;
    }
  }

  return maxIndex;
}

console.log(maxContinousSequence([0, 0, 1, 0, 1, 1, 1, 0, 1, 1]));
