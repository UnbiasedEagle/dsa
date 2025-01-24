class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
      return [];
    }

    const n = nums.length;
    const result = new Array(n);
    
    // Calculate products of all elements to the left
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i];
    }
    
    // Calculate products of all elements to the right and combine
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }
    
    return result;
  }
}
