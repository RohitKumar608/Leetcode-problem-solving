/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestIdealString = function (s, k) {
  const cache = []
  function helper(i, prev) {
    if (i === s.length) {
      return 0
    }
    if (cache[i] && cache[i][prev] !== undefined) {
      return cache[i][prev]
    }
    let res = helper(i + 1, prev)
    if (prev === '' || Math.abs(s.charCodeAt(i) - prev.charCodeAt(0)) <= k) {
      res = Math.max(res, 1 + helper(i + 1, s[i]))
    }
    cache[i] = []
    cache[i][prev] = res
    return res
  }
  return helper(0, '')
}

var longestIdealString = function (s, k) {
  const dp = new Array(26).fill(0)
  for (const c of s) {
    const curr = c.charCodeAt(0) - 'a'.charCodeAt(0)
    let longest = 1
    for (let prev = 0; prev <= 25; prev++) {
      if (Math.abs(curr - prev) <= k) {
        longest = Math.max(longest, 1 + dp[prev])
      }
    }
    dp[curr] = Math.max(dp[curr], longest)
  }
  return Math.max(...dp)
}

// console.log(longestIdealString('acfgbd', 2))
// console.log(longestIdealString('lkpkxcigcs', 6))
console.log(longestIdealString('eduktdb', 15))
