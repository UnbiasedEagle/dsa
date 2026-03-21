/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const taskCount = {};
  for (const task of tasks) {
    taskCount[task] = (taskCount[task] || 0) + 1;
  }

  const maxHeap = new CustomMaxHeap();
  for (const [task, count] of Object.entries(taskCount)) {
    maxHeap.push(task, count);
  }

  let time = 0;
  const queue = [];

  while (maxHeap.heap.length > 0 || queue.length > 0) {
    time++;
    while (queue.length > 0 && queue[0].time <= time) {
      const { val, count } = queue.shift();
      maxHeap.push(val, count);
    }
    if (maxHeap.heap.length > 0) {
      const { val, count } = maxHeap.pop();
      if (count > 1) {
        queue.push({ val, count: count - 1, time: time + n + 1 });
      }
    }
  }

  return time;
};

class CustomMaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val, count) {
    this.heap.push({ val, count });
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].count >= this.heap[index].count) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largest = index;
      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex].count > this.heap[largest].count
      ) {
        largest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].count > this.heap[largest].count
      ) {
        largest = rightChildIndex;
      }
      if (largest === index) break;
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}
