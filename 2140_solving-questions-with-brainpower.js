/**
 * @param {number[][]} questions
 * @return {number}
 */

var mostPoints = function (questions) {
  const memo = new Map()
  function backtrack(idx) {
    if (idx >= questions.length) {
      return 0
    }
    if (memo.has(idx)) {
      return memo.get(idx)
    }
    let max = 0
    max = Math.max(
      max,
      questions[idx][0] + backtrack(idx + questions[idx][1] + 1),
      backtrack(idx + 1)
    )
    memo.set(idx, max)
    return max
  }
  return backtrack(0)
}
