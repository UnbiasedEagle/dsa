// Time Complexity: O(n^2)
function printSubarrayZeroSum1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum == 0) {
        console.log('Subarray from index ' + i + ' to index ' + j);
      }
    }
  }
}

// Time Complexity: O(n)
function printSubarrayZeroSum2(arr) {
  const map = new Map();
  map.set(0, [-1]);
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (map.has(currentSum)) {
      // loop through the indexes in the map
      for (let j of map.get(currentSum)) {
        console.log('Subarray from index ' + (j + 1) + ' to index ' + i);
      }
    }

    if (map.has(currentSum)) {
      map.get(currentSum).push(i);
    } else {
      map.set(currentSum, [i]);
    }
  }
}

printSubarrayZeroSum2([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
