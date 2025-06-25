function replaceElementWithProduct(arr) {
  findProduct(0, arr, 1);
  return arr;
}

function findProduct(index, arr, leftProduct) {
  if (index >= arr.length) {
    return 1;
  }
  const rightProduct = findProduct(index + 1, arr, leftProduct * arr[index]);
  const el = arr[index];
  arr[index] = rightProduct * leftProduct;
  return rightProduct * el;
}

console.log(replaceElementWithProduct([1, 2, 3, 4, 5]));
