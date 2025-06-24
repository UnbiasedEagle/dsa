// Time Complexity: O(n)
// Space Complexity: O(n)
function zeroSumSubarray(arr) {
  const set = new Set();
  set.add(0);

  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (set.has(currentSum)) {
      return true;
    }

    set.add(currentSum);
  }

  return false;
}
