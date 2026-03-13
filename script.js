/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new CustomMinHeap(k);
  for (const num of nums) {
    heap.push(num);
  }
  return heap.heap[0];
};

class CustomMinHeap {
  constructor(k) {
    this.k = k;
    this.heap = [];
  }

  push(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.heapifyUp();
    } else if (val > this.heap[0]) {
      this.heap[0] = val;
      this.heapifyDown(0);
    }
  }

  heapifyUp() {
    let i = this.heap.length - 1;

    while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
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
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else {
        break;
      }
    }
  }
}
