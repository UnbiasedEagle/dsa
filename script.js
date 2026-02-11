function makeCounter(initialValue = 0) {
  let counter = initialValue;

  return {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    reset() {
      counter = initialValue;
      return counter;
    },
  };
}

const counter = makeCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());
