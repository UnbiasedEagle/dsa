class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  findKthLargest(nums, k) {
    const minHeap = new MinHeap(k);
    for (let i = 0; i < nums.length; i++) {
      minHeap.insert(nums[i]);
    }
    return minHeap.getMax();
  }
}

class MinHeap {
  constructor(k) {
    this.k = k;
    this.heap = [];
    this.size = 0;
  }

  insert(num) {
    if (this.size < this.k) {
      this.heap.push(num);
      this.size++;
      this.heapifyUp(this.size - 1);
    } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.heapifyDown(0);
    }
  }

  getMax() {
    return this.heap[0];
  }

  heapifyUp(i) {
    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);

      if (parentIndex < 0 || this.heap[parentIndex] < this.heap[i]) {
        break;
      }

      [this.heap[i], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[i],
      ];
      i = parentIndex;
    }
  }

  heapifyDown(i) {
    while (true) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;

      let minIndex = i;

      if (
        leftChildIndex < this.size &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === i) {
        break;
      }

      [this.heap[i], this.heap[minIndex]] = [this.heap[minIndex], this.heap[i]];
      i = minIndex;
    }
  }
}
