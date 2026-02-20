Array.prototype.myReduce = function (callback, initialValue) {
  if (
    typeof callback !== "function" ||
    (initialValue === undefined && this.length === 0)
  ) {
    throw new TypeError("callback must be a function");
  }

  let result = initialValue ? initialValue : this[0];
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < this.length; i++) {
    if (isNaN(this[i])) {
      continue;
    }
    result = callback(result, this[i], i, this);
  }

  return result;
};
