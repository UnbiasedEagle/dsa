class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.minHeap = new MinHeap(k);

    for (const num of nums) {
      this.minHeap.insert(num);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minHeap.insert(val);
    return this.minHeap.peek();
  }
}

class MinHeap {
  constructor(size) {
    this.maxSize = size;
    this.heap = new Array(size);
    this.size = 0;
  }

  insert(val) {
    if (this.size < this.maxSize) {
      this.heap[this.size] = val;
      this.size++;
      this.siftUp(this.size - 1);
      return;
    }

    if (this.heap[0] > val) {
      return;
    }

    this.heap[0] = val;
    this.siftDown(0);
  }

  siftUp(pos) {
    while (pos > 0) {
      const parentPose = Math.floor((pos - 1) / 2);

      if (parentPose < 0 || this.heap[parentPose] < this.heap[pos]) {
        break;
      }

      [this.heap[parentPose], this.heap[pos]] = [
        this.heap[pos],
        this.heap[parentPose],
      ];

      pos = parentPose;
    }
  }

  siftDown(pos) {
    while (true) {
      const leftPos = pos * 2 + 1;
      const rightPos = pos * 2 + 2;

      let minPos = pos;

      if (leftPos < this.size && this.heap[leftPos] < this.heap[minPos]) {
        minPos = leftPos;
      }

      if (rightPos < this.size && this.heap[rightPos] < this.heap[minPos]) {
        minPos = rightPos;
      }

      if (minPos === pos) {
        break;
      }

      [this.heap[pos], this.heap[minPos]] = [this.heap[minPos], this.heap[pos]];

      pos = minPos;
    }
  }

  peek() {
    return this.heap[0];
  }
}
