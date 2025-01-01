// https://leetcode.com/problems/maximum-score-after-splitting-a-string

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let oneCount = 0
  let zeroCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') oneCount++
  }
  let result = 0

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') {
      zeroCount++
    } else {
      oneCount--
    }
    result = Math.max(result, zeroCount + oneCount, oneCount)
  }
  return result
}
