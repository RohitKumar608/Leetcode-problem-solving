/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)
  dp[s.length] = true
  for (let i = s.length - 1; i >= 0; i--) {
    for (const val of wordDict) {
      if (
        i + val.length <= s.length &&
        s.substring(i, i + val.length) === val
      ) {
        dp[i] = dp[i + val.length]
        if (dp[i]) break
      }
    }
  }
  return dp[0]
}

// console.log(wordBreak('leetcode', ['leet', 'code']))
// console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']))
// console.log(wordBreak('applepenapple', ['apple', 'pen']))
// console.log(wordBreak('bb', ['a', 'b', 'bbb', 'bbbb']))
// console.log(wordBreak('aaaaaaa', ['aaaa', 'aaa']))
console.log(wordBreak('goalspecial', ['go', 'goal', 'goals', 'special']))
