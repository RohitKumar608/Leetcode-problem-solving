/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const dp = {}
  const MOD = 10 ** 9 + 7
  function dfs(length) {
    if (length > high) {
      return 0
    }
    if (dp[length]) {
      return dp[length]
    }

    dp[length] = length >= low ? 1 : 0
    dp[length] += dfs(length + zero) + dfs(length + one)
    return dp[length] % MOD
  }

  return dfs(0)
}

console.log(countGoodStrings(3, 3, 1, 1))
console.log(countGoodStrings(2, 3, 1, 2))
