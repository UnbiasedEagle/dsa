class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let result = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        result = Math.max(result, prices[i] - minPrice);
      }
    }

    return result;
  }
}
