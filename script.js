/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const maxHeap = new CustomMinHeap(k);
  const rows = matrix.length;

  for (let row = 0; row < rows; row++) {
    maxHeap.add(matrix[row][0], 0, row);
  }

  while (k > 1) {
    const [val, index, row] = maxHeap.pop();
    if (index + 1 < matrix[row].length) {
      maxHeap.add(matrix[row][index + 1], index + 1, row);
    }
    k--;
  }

  return maxHeap.pop()[0];
};

class CustomMinHeap {
  constructor(k) {
    this.k = k;
    this.heap = [];
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const [val, index, row] = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return [val, index, row];
  }

  add(val, index, row) {
    if (this.heap.length < this.k) {
      this.heap.push([val, index, row]);
      this.heapifyUp();
    } else if (val < this.heap[0][0]) {
      this.heap[0] = [val, index, row];
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
