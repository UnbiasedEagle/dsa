function largestContinousSubarray(arr) {
  let start = 0;
  let end = 0;
  let maxLength = 1;

  for (let i = 0; i < arr.length; i++) {
    let maxVal = arr[i];
    let minVal = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > maxVal) {
        maxVal = arr[j];
      }
      if (arr[j] < minVal) {
        minVal = arr[j];
      }

      if (isConsecutive(arr, i, j, minVal, maxVal)) {
        const length = j - i + 1;
        if (length > maxLength) {
          maxLength = length;
          start = i;
          end = j;
        }
      }
    }
  }

  console.log('The largest subarray is: ', arr.slice(start, end + 1));
}

function isConsecutive(arr, i, j, minVal, maxVal) {
  const set = new Set();

  for (let k = i; k <= j; k++) {
    if (set.has(arr[k])) {
      return false;
    }

    set.add(arr[k]);
  }

  for (let k = minVal; k <= maxVal; k++) {
    if (!set.has(k)) {
      return false;
    }
  }

  return true;
}

largestContinousSubarray([2, 0, 2, 1, 4, 3, 1, 0]);
