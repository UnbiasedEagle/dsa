/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  const minHeap = new CustomMinHeap(k);
  for (const num of nums) {
    minHeap.add(num);
  }
  this.minHeap = minHeap;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.add(val);
  return this.minHeap.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class CustomMinHeap {
  constructor(k) {
    this.k = k;
    this.heap = [];
  }

  add(val) {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.heapifyUp();
    } else if (val > this.heap[0]) {
      this.heap[0] = val;
      this.heapifyDown();
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
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
        this.heap[leftIndex] < this.heap[smallest]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallest]
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
