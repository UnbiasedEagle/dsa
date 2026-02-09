class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const queue = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
      while (queue.length > 0 && i - queue[0] >= k) {
        queue.shift();
      }

      while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
        queue.pop();
      }

      queue.push(i);

      if (i >= k - 1) {
        result.push(nums[queue[0]]);
      }
    }

    return result;
  }
}
