/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new CustomMaxHeap();
  for (const stone of stones) {
    heap.push(stone);
  }

  while (heap.heap.length > 1) {
    const x = heap.pop();
    const y = heap.pop();
    if (x !== y) {
      heap.push(Math.abs(x - y));
    }
  }

  if (heap.heap.length === 0) {
    return 0;
  }

  return heap.pop();
};

class CustomMaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return root;
  }

  heapifyUp() {
    let i = this.heap.length - 1;

    while (i > 0 && this.heap[i] > this.heap[Math.floor((i - 1) / 2)]) {
      [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [
        this.heap[Math.floor((i - 1) / 2)],
        this.heap[i],
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  heapifyDown(i) {
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest !== i) {
        [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
        i = largest;
      } else {
        break;
      }
    }
  }
}
