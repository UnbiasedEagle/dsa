class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  majorityElement(nums) {
    let count1 = 0;
    let count2 = 0;
    let num1 = nums[0];
    let num2 = nums[0];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === num1) {
        count1++;
      } else if (nums[i] === num2) {
        count2++;
      } else if (count1 === 0) {
        num1 = nums[i];
        count1 = 1;
      } else if (count2 === 0) {
        num2 = nums[i];
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    }

    count1 = 0;
    count2 = 0;

    for (const num of nums) {
      if (num === num1) {
        count1++;
      } else if (num === num2) {
        count2++;
      }
    }

    const result = [];

    if (count1 > Math.floor(nums.length / 3)) {
      result.push(num1);
    }
    if (count2 > Math.floor(nums.length / 3)) {
      result.push(num2);
    }

    return result;
  }
}
