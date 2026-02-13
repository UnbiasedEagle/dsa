/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minPrice) {
      result = Math.max(maxProfit, prices[i] - minPrice);
    } else {
      minPrice = prices[i];
    }
  }

  return result;
};
