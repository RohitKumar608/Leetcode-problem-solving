/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replaceAll('AB', '')
    s = s.replaceAll('CD', '')
  }
  return s.length
}
var minLength = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const stackLastVal = stack.length && stack[stack.length - 1]
    if (stackLastVal == 'A' && s[i] === 'B') {
      stack.pop()
      continue
    }
    if (stackLastVal == 'C' && s[i] === 'D') {
      stack.pop()
      continue
    }
    stack.push(s[i])
  }
  return stack.length
}
