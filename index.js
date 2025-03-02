/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    let days = 0;
    const intervalHeap = new MinHeap();

    for (let i = 0; i < intervals.length; i++) {
      if (intervalHeap.getSize() === 0) {
        intervalHeap.insert(intervals[i].end);
      } else if (intervalHeap.extractMin() > intervals[i].start) {
        intervalHeap.insert(intervals[i].end);
      } else {
        intervalHeap.pop();
        intervalHeap.insert(intervals[i].end);
      }

      days = Math.max(days, intervalHeap.getSize());
    }

    return days;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index >= 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (parentIndex < 0 || this.heap[parentIndex] <= this.heap[index]) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) {
      this.heap.pop();
      return;
    }
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
  }

  extractMin() {
    return this.heap[0];
  }

  bubbleDown(index) {
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let minIndex = index;

      if (leftIndex < this.heap.length) {
        if (this.heap[leftIndex] < this.heap[minIndex]) {
          minIndex = leftIndex;
        }
      }

      if (rightIndex < this.heap.length) {
        if (this.heap[rightIndex] < this.heap[minIndex]) {
          minIndex = rightIndex;
        }
      }

      if (minIndex === index) {
        break;
      }

      [this.heap[minIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[minIndex],
      ];
      index = minIndex;
    }
  }
}
