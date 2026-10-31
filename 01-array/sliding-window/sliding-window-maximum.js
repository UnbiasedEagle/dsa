/*
Sliding Window Maximum
https://leetcode.com/problems/sliding-window-maximum/description/

Input:
- `nums`: an array of integers
- `k`: the size of the window

Goal:
- slide a window of size k from left to right, and find the maximum inside it at every position

Output:
- an array of the maximums, one for each window position

Rules:
- the window moves one step at a time
- there are nums.length - k + 1 windows
- keep a deque of indices (not values) whose values are in decreasing order
- the front of the deque is always the index of the current maximum
- before adding a new index, drop smaller values from the back, they can never be a maximum again
- drop the front index when it falls outside the window

Constraints:
- 1 <= k <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

Examples:
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3); // [3, 3, 5, 5, 6, 7]
maxSlidingWindow([1], 1);                        // [1]

Time: O(n)
Space: O(k)
*/

function maxSlidingWindow(nums, k) {
  const result = [];

  const deque = [];
  let leftIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    while (deque[leftIdx] <= i - k) {
      leftIdx++;
    }
    while (
      deque.length - 1 >= leftIdx &&
      nums[i] >= nums[deque[deque.length - 1]]
    ) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[leftIdx]]);
    }
  }

  return result;
}

module.exports = maxSlidingWindow;
