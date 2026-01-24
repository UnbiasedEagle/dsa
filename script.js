class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyHashSet {
  constructor() {
    this.maxSize = 10 ** 4;
    this.arr = Array.from({ length: this.maxSize }, () => new Node(-1));
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    const idx = key % this.maxSize;
    let temp = this.arr[idx];

    while (temp.next) {
      if (temp.value === key) {
        return;
      }
      temp = temp.next;
    }

    if (temp.value === key) {
      return;
    }

    temp.next = new Node(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const idx = key % this.maxSize;
    let temp = this.arr[idx];

    while (temp.next && temp.next.value !== key) {
      temp = temp.next;
    }

    if (!temp.next) {
      return;
    }

    temp.next = temp.next.next;
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const idx = key % this.maxSize;
    let temp = this.arr[idx];

    while (temp) {
      if (temp.value === key) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
