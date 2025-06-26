function inPlaceMerge1(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length) {
    if (arr2[0] < arr1[i]) {
      let temp = arr1[i];
      arr1[i] = arr2[0];
      arr2[0] = temp;

      let k = 0;

      while (k + 1 < arr2.length && arr2[k + 1] < arr2[k]) {
        [arr2[k], arr2[k + 1]] = [arr2[k + 1], arr2[k]];
        k++;
      }
    }
    i++;
  }
}

const arr1 = [1, 4, 7, 8, 10];
const arr2 = [2, 3, 9];

inPlaceMerge1(arr1, arr2);

console.log(arr1);
console.log(arr2);
