function majorityElement(arr) {
  let count = 1;
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === result) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      result = arr[i];
      count = 1;
    }
  }

  return result;
}
