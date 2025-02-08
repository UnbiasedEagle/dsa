/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    const minHeap = new MinHeap();
    for (let i = 0; i < lists.length; i++) {
      let node = lists[i];
      while (node) {
        minHeap.insert(node);
        node = node.next;
      }
    }

    const dummyNode = new ListNode(0);
    let current = dummyNode;

    while (minHeap.heap.length > 0) {
      const node = minHeap.extractMin();
      current.next = node;
      current = current.next;
    }

    return dummyNode.next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index].val < this.heap[parentIndex].val) {
        const temp = this.heap[index];
        this.heap[index] = this.heap[parentIndex];
        this.heap[parentIndex] = temp;
      }

      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length < 2) {
      return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let minIndex = index;

      if (leftChildIndex < this.heap.length) {
        if (this.heap[leftChildIndex].val < this.heap[minIndex].val) {
          minIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < this.heap.length) {
        if (this.heap[rightChildIndex].val < this.heap[minIndex].val) {
          minIndex = rightChildIndex;
        }
      }

      if (minIndex === index) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[minIndex];
      this.heap[minIndex] = temp;

      index = minIndex;
    }
  }
}
