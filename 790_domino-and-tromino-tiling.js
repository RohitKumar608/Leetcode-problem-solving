/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const dp = new Array(n + 1)
  const MOD = Math.pow(10, 9) + 7
  dp[0] = 1
  dp[1] = 2
  dp[2] = 5
  for (i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % MOD
  }
  return dp[n - 1]
}

console.log(numTilings(30))
