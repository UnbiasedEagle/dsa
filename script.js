function customSort(arr) {
  const charArr = arr.filter((item) => isNaN(item));
  const numArr = arr.filter((item) => !isNaN(item));

  charArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  numArr.sort((a, b) => a - b);

  return [...charArr, ...numArr];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));

// module.exports = customSort;
