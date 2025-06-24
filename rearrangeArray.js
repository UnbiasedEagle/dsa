function rearrangeArr1(arr) {
  arr.sort((a, b) => a - b);
  const result = Array(arr.length).fill(0);
  let i = 0;
  let j = arr.length - 1;
  let k = 0;
  while (i < j) {
    result[k++] = arr[i++];
    result[k++] = arr[j--];
  }

  return result;
}

function rearrangeArr2(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
    if (i + 1 < arr.length && arr[i + 1] > arr[i]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
  }

  return arr;
}
