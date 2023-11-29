/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = []
  for (let i = 0; i <= n; i++) {
    const number = i.toString(2)
    let countOne = 0
    for (let i = 0; i < number.length; i++) {
      if (number[i] === '1') countOne++
    }
    result.push(countOne)
  }
  return result
}

var countBits = function (n) {
  const dp = new Array(n + 1).fill(0)
  let offset = 1
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i
    dp[i] = 1 + dp[i - offset]
  }
  return dp
}
