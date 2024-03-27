/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods1 = function (prices) {
  let result = prices.length
  for (let i = 0; i < prices.length; i++) {
    let previousVal = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      if (previousVal - prices[j] === 1) {
        previousVal = prices[j]
        result++
      } else {
        break
      }
    }
  }
  return result
}

var getDescentPeriods = function (prices) {
  let result = prices.length
  const dp = new Array(prices.length).fill(0)
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] - 1 === prices[i + 1]) {
      dp[i] = (dp[i - 1] || 0) + 1
      result += dp[i]
    }
  }
  return result
}

console.log(getDescentPeriods([3, 2, 1, 4]))
console.log(getDescentPeriods([8, 6, 7, 7]))
