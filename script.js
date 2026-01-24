class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class MyHashMap {
  constructor() {
    this.maxSize = 10 ** 4;
    this.arr = Array.from({ length: this.maxSize }, () => new Node(-1, -1));
  }

  getIdx(key) {
    return key % this.maxSize;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const idx = this.getIdx(key);
    let temp = this.arr[idx];

    while (temp.next) {
      if (temp.key === key) {
        temp.value = value;
        return;
      }
      temp = temp.next;
    }

    if (temp.key === key) {
      temp.value = value;
      return;
    }

    temp.next = new Node(key, value);
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const idx = this.getIdx(key);
    let temp = this.arr[idx];

    while (temp) {
      if (temp.key === key) {
        return temp.value;
      }
      temp = temp.next;
    }
    return -1;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const idx = this.getIdx(key);
    let temp = this.arr[idx];

    while (temp.next && temp.next.key !== key) {
      temp = temp.next;
    }

    if (!temp.next) {
      return;
    }

    if (temp.next.key === key) {
      temp.next = temp.next.next;
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
