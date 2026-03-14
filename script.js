/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const minHeap = new CustomMinHeap(k);
  for (const [num, freq] of freqMap) {
    minHeap.add([freq, num]);
  }
  const result = [];
  for (const [freq, num] of minHeap.heap) {
    result.push(num);
  }
  return result;
};

class CustomMinHeap {
  constructor(k) {
    this.k = k;
    this.heap = [];
  }

  add(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.heapifyUp();
    } else if (val[0] > this.heap[0][0]) {
      this.heap[0] = val;
      this.heapifyDown();
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (index < this.heap.length) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallest = index;
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex][0] < this.heap[smallest][0]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex][0] < this.heap[smallest][0]
      ) {
        smallest = rightIndex;
      }
      if (smallest === index) break;
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      index = smallest;
    }
  }
}
