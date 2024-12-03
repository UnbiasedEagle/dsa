class Solution {
  /**
   * @param {character[]} tasks
   * @param {number} n
   * @return {number}
   */
  leastInterval(tasks, n) {
    const count = new Array(26).fill(0);

    for (const task of tasks) {
      count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    const maxHeap = new MaxPriorityQueue();

    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        maxHeap.push(count[i]);
      }
    }

    const queue = new Queue();
    let time = 0;

    while (maxHeap.size() > 0 || queue.size() > 0) {
      time++;

      if (maxHeap.size() > 0) {
        const count = maxHeap.pop();

        if (count - 1 > 0) {
          queue.push([count - 1, time + n]);
        }
      }

      if (queue.size() > 0 && queue.front()[1] === time) {
        maxHeap.push(queue.pop()[0]);
      }
    }

    return time;
  }
}
