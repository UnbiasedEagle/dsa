class StockSpanner {
  constructor() {
    this.stockPrices = [];
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let days = 1;

    while (
      this.stockPrices.length > 0 &&
      this.stockPrices[this.stockPrices.length - 1][0] <= price
    ) {
      days += this.stockPrices[this.stockPrices.length - 1][1];
      this.stockPrices.pop();
    }

    this.stockPrices.push([price, days]);

    return days;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
