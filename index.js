class Tweet {
  constructor(id, time) {
    this.id = id;
    this.time = time;
  }
}

class Twitter {
  constructor() {
    this.userTweets = new Map();
    this.userFollowees = new Map();
    this.time = 0;
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.userTweets.has(userId)) {
      this.userTweets.set(userId, []);
    }
    this.userTweets.get(userId).push(new Tweet(tweetId, this.time++));
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const result = [];
    const maxHeap = new MaxHeap();

    if (this.userTweets.has(userId)) {
      for (const tweet of this.userTweets.get(userId)) {
        maxHeap.push(tweet);
      }
    }

    const userFollowees = this.userFollowees.get(userId);
    if (userFollowees) {
      for (const followeeId of userFollowees) {
        if (this.userTweets.has(followeeId)) {
          for (const tweet of this.userTweets.get(followeeId)) {
            maxHeap.push(tweet);
          }
        }
      }
    }

    while (maxHeap.getLength() > 0 && result.length < 10) {
      result.push(maxHeap.pop().id);
    }

    return result;
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (followeeId === followerId) {
      return;
    }

    if (!this.userFollowees.has(followerId)) {
      this.userFollowees.set(followerId, new Set());
    }
    this.userFollowees.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (followeeId === followerId) {
      return;
    }

    if (this.userFollowees.has(followerId)) {
      this.userFollowees.get(followerId).delete(followeeId);
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return item;
  }

  bubbleUp(index) {
    while (index >= 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (
        parentIndex < 0 ||
        this.heap[parentIndex].time > this.heap[index].time
      ) {
        return;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let minIndex = index;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex].time > this.heap[minIndex].time
      ) {
        minIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex].time > this.heap[minIndex].time
      ) {
        minIndex = rightIndex;
      }

      if (minIndex === index) {
        return;
      }
      [this.heap[index], this.heap[minIndex]] = [
        this.heap[minIndex],
        this.heap[index],
      ];
      index = minIndex;
    }
  }
}
