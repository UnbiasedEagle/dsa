class Solution {
  /**
   * @param {character[]} tasks
   * @param {number} n
   * @return {number}
   */
  leastInterval(tasks, n) {
    const map = new Map();

    for (let i = 0; i < tasks.length; i++) {
      if (map.has(tasks[i])) {
        map.set(tasks[i], map.get(tasks[i]) + 1);
      } else {
        map.set(tasks[i], 1);
      }
    }

    const heap = new MaxHeap();

    for (const value of map.values()) {
      heap.push(value);
    }

    let time = 0;
    const queue = [];

    while (heap.getLength() > 0 || queue.length > 0) {
      time++;

      if (queue.length > 0 && queue[0][1] <= time) {
        heap.push(queue.shift()[0]);
      }

      if (heap.getLength() > 0) {
        const element = heap.getMax();

        if (element - 1 > 0) {
          queue.push([element - 1, time + n + 1]);
        }
      }
    }

    return time;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }

  push(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  getMax() {
    const max = this.heap[0];

    if (this.heap.length === 1) {
      this.heap.pop();
      return max;
    }

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (parentIndex < 0 || this.heap[parentIndex] > this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let minIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === index) {
        break;
      }

      [this.heap[index], this.heap[minIndex]] = [
        this.heap[minIndex],
        this.heap[index],
      ];
      index = minIndex;
    }
  }
}
