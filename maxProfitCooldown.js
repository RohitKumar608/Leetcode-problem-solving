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

console.log(maxProfit([1, 2, 3, 0, 2]))
