function largestEqual01Subarray1(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = -1;
    }
  }

  const map = new Map();
  map.set(0, -1);
  let currentSum = 0;
  let maxLength = 0;
  let startIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (map.has(currentSum)) {
      const length = i - map.get(currentSum);

      if (length > maxLength) {
        maxLength = length;
        startIdx = map.get(currentSum) + 1;
      }
    }

    if (!map.has(currentSum)) {
      map.set(currentSum, i);
    }
  }

  if (startIdx === -1) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr[i] = 0;
    }
  }

  return arr.slice(startIdx, startIdx + maxLength);
}

console.log(largestEqual01Subarray1([0, 0, 1, 0, 1, 0]));
