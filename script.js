function countPositives(arr) {
  return arr.reduce((acc, curr) => acc + (curr > 0 ? 1 : 0), 0);
}
