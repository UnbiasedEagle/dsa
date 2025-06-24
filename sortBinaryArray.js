function sortBinaryArr1(arr) {
  let zeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes++;
    }
  }

  for (let i = 0; i < zeroes; i++) {
    arr[i] = 0;
  }

  for (let i = zeroes; i < arr.length; i++) {
    arr[i] = 1;
  }
}

function sortBinaryArr2(arr) {
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
      idx++;
    }
  }

  return arr;
}

console.log(sortBinaryArr2([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]));
