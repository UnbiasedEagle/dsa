class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    const left = 0;
    const right = nums.length - 1;
    this.sort(nums, left, right);
    return nums;
  }

  sort(nums, left, right) {
    if (left >= right) {
      return;
    }
    const mid = Math.floor((left + right) / 2);
    this.sort(nums, left, mid);
    this.sort(nums, mid + 1, right);
    this.merge(nums, left, mid, right);
  }

  merge(nums, left, mid, right) {
    const temp = [];

    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
      if (nums[i] < nums[j]) {
        temp.push(nums[i++]);
      } else {
        temp.push(nums[j++]);
      }
    }

    while (i <= mid) {
      temp.push(nums[i++]);
    }
    while (j <= right) {
      temp.push(nums[j++]);
    }

    for (let i = 0; i < temp.length; i++) {
      nums[i + left] = temp[i];
    }
  }
}
