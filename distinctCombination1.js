function distinctCombination(arr, k) {
  const result = [];
  helper(arr, 0, k, result, []);
  return result;
}

function helper(arr, index, k, result, current) {
  if (current.length === k) {
    result.push(current.slice());
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) {
      continue;
    }
    current.push(arr[i]);
    helper(arr, i + 1, k, result, current);
    current.pop();
  }
}

console.log(distinctCombination([2, 2, 2], 2));
