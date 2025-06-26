// Time Complexity: O(n^2)
// Space Complexity: O(1)
function findPair1(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function findPair2(arr, k) {
  arr.sort((a, b) => a - b);

  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let sum = arr[low] + arr[high];
    if (sum === k) {
      return [arr[low], arr[high]];
    } else if (sum < k) {
      low++;
    } else {
      high--;
    }
  }
  return [];
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function findPair3(arr, k) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const comp = k - arr[i];
    if (set.has(comp)) {
      return [arr[i], comp];
    }
    set.add(arr[i]);
  }

  return [];
}
