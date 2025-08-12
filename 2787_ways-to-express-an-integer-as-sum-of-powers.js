/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
  const dp = {}
  const MOD = 1e9 + 7

  function countWays(current, remaining) {
    const key = current + '-' + remaining
    if (dp[key] !== undefined) {
      return dp[key]
    }

    if (remaining === 0) {
      return 1
    }
    if (remaining < 0 || Math.pow(current, x) > remaining) {
      return 0
    }

    const take = countWays(current + 1, remaining - Math.pow(current, x))
    const skip = countWays(current + 1, remaining)
    dp[key] = (take + skip) % MOD

    return dp[key]
  }

  return countWays(1, n)
}

// console.log(numberOfWays(116, 1))
console.log(numberOfWays(20, 1))
