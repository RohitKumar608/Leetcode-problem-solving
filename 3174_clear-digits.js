/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (+s[i] >= 0 && +s[i] <= 9) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}
