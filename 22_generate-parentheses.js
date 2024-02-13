// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []
  const stack = []
  function backTrack(openN, closedN) {
    if (openN === n && closedN === n) {
      result.push(stack.join(''))
      return
    }
    if (openN < n) {
      stack.push('(')
      backTrack(openN + 1, closedN)
      stack.pop()
    }
    if (closedN < openN) {
      stack.push(')')
      backTrack(openN, closedN + 1)
      stack.pop()
    }
  }

  backTrack(0, 0)
  return result
}

console.log(generateParenthesis(3))
