class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  kClosest(points, k) {
    const maxHeap = new MaxHeap(k);
    for (let i = 0; i < points.length; i++) {
      const distance = points[i][0] ** 2 + points[i][1] ** 2;
      maxHeap.insert({ point: points[i], distance });
    }
    const result = [];
    while (maxHeap.size > 0) {
      const max = maxHeap.getMax();
      result.push(max.point);
    }
    return result;
  }
}

class MaxHeap {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.heap = [];
    this.size = 0;
  }

  insert(element) {
    if (this.size < this.maxSize) {
      this.heap.push(element);
      this.size++;
      this.bubbleUp(this.size - 1);
    } else if (element.distance < this.heap[0].distance) {
      this.heap[0] = element;
      this.bubbleDown(0);
    }
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (
        parentIndex < 0 ||
        this.heap[parentIndex].distance > this.heap[index].distance
      ) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  getMax() {
    const maxi = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.size--;
    this.bubbleDown(0);
    return maxi;
  }

  bubbleDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let minIndex = index;

      if (leftChildIndex < this.size) {
        if (this.heap[leftChildIndex].distance < this.heap[minIndex].distance) {
          minIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.size) {
        if (
          this.heap[rightChildIndex].distance < this.heap[minIndex].distance
        ) {
          minIndex = rightChildIndex;
        }
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
