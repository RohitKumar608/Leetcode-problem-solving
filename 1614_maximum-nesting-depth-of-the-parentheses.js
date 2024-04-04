/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  const stack = []
  let nestedParenthesis = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
      nestedParenthesis = Math.max(nestedParenthesis, stack.length)
    }
    if (s[i] === ')') {
      stack.pop()
    }
  }
  return nestedParenthesis
}

console.log(maxDepth('(1+(2*3)+(8)/4)+1'))
console.log(maxDepth('(1)+((2))+(((3)))'))
