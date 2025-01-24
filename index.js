class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }

    const minHeap = new MinPriorityQueue({ priority: (item) => item.value });

    for (let [key, value] of map) {
      if (minHeap.size() < k) {
        minHeap.enqueue({ value, key });
      } else if (value > minHeap.front().element.value) {
        minHeap.dequeue();
        minHeap.enqueue({ value, key });
      }
    }

    const result = [];

    while (minHeap.size() > 0) {
      result.push(minHeap.front().element.key);
      minHeap.dequeue();
    }

    return result;
  }
}
