class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeight(stones) {
    const maxHeap = new MaxHeap();

    for (let i = 0; i < stones.length; i++) {
      maxHeap.insert(stones[i]);
    }

    while (maxHeap.getSize() > 1) {
      const max1 = maxHeap.extractMax();
      const max2 = maxHeap.extractMax();

      if (max1 === max2) {
        continue;
      }

      maxHeap.insert(Math.abs(max1 - max2));
    }

    if (maxHeap.getSize() === 1) {
      return maxHeap.extractMax();
    }

    return 0;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index >= 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (parentIndex < 0 || this.heap[parentIndex] > this.heap[index]) {
        return;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.bubbleDown(0);
    return max;
  }

  getSize() {
    return this.heap.length;
  }

  bubbleDown(index) {
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;

      let maxIndex = index;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightIndex;
      }

      if (maxIndex === index) {
        return;
      }

      [this.heap[maxIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[maxIndex],
      ];

      index = maxIndex;
    }
  }
}
