function dnf(arr) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 0) {
      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      start++;
      mid++;
    } else {
      [arr[end], arr[mid]] = [arr[mid], arr[end]];
      end--;
    }
  }
}
