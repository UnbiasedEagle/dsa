function mergeArrayConstraint(arr1, arr2) {
  let idx = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== 0) {
      [arr1[i], arr1[idx]] = [arr1[idx], arr1[i]];
      idx++;
    }
  }

  let start1 = 0;
  let start2 = idx - 1;

  while (start1 < start2) {
    [arr1[start1], arr1[start2]] = [arr1[start2], arr1[start1]];
    start1++;
    start2--;
  }

  start1 = 0;
  start2 = arr1.length - 1;

  while (start1 < start2) {
    [arr1[start1], arr1[start2]] = [arr1[start2], arr1[start1]];
    start1++;
    start2--;
  }

  let i = arr2.length;
  let j = 0;
  idx = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr1[idx++] = arr1[i++];
    } else {
      arr1[idx++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    arr1[idx++] = arr1[i++];
  }

  while (j < arr2.length) {
    arr1[idx++] = arr2[j++];
  }

  return arr1;
}

console.log(
  mergeArrayConstraint([0, 2, 0, 3, 0, 5, 6, 0, 0], [1, 8, 9, 10, 15])
);
