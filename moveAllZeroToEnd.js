function moveAllZeroToEnd(arr) {
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
      idx++;
    }
  }

  return arr;
}

console.log(moveAllZeroToEnd([0, 1, 0, 3, 12]));
