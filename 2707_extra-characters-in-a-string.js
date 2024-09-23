/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

var minExtraChar = function (s, dictionary) {
  const words = new Set(dictionary)
  const length = s.length
  const dp = { [s.length]: 0 }
  function dfs(i) {
    if (i in dp) {
      return dp[i]
    }
    let res = 1 + dfs(i + 1)

    for (let j = i; j < length; j++) {
      if (words.has(s.slice(i, j + 1))) {
        res = Math.min(res, dfs(j + 1))
      }
    }
    dp[i] = res

    return res
  }
  return dfs(0)
}
