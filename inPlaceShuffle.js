function inPlaceShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }

  return array;
}

console.log(inPlaceShuffle([1, 2, 3, 4, 5]));
