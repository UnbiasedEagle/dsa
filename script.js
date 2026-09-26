/**
 * @param {number[]} prices
 * @return {number}
 *
 * Time:  O(n)
 * Space: O(1)
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  let right = 1;
  while (right < prices.length) {
    if (minPrice < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - minPrice);
    } else {
      minPrice = prices[right];
    }
    right++;
  }
  return maxProfit;
};
