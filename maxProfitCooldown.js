// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let count = 0
  let profit = 0
  let buyStock = prices[0]
  while (count < prices.length) {
    if (prices[count] < buyStock) {
      buyStock = prices[count]
    }
    if (
      buyStock < prices[count] &&
      (prices[count] > prices[count + 1] || prices[count + 1] === undefined)
    ) {
      console.log(count, prices[count])

      profit += prices[count] - buyStock
      buyStock = prices[count + 1]
      count++
    }
    count++
  }
  return profit
}

var maxProfit2 = function (prices) {
  let totalProfit = 0

  for (var i = 0; i < prices.length - 1; ++i) {
    totalProfit += Math.max(prices[i + 1] - prices[i], 0)
  }

  return totalProfit
}

console.log(maxProfit([1, 2, 3, 0, 2]))
