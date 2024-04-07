/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftMin = 0
  let leftMax = 0
  let count = 0
  for (const c of s) {
    if (c === '(') {
      leftMin++
      leftMax++
    } else if (c === ')') {
      leftMax--
      leftMin--
    } else {
      leftMin--
      leftMax++
    }
    if (leftMin < 0) {
      leftMin = 0
    }
    if (leftMax < 0) return false
    count++
  }
  return leftMin === 0
}

var checkValidString = function (s) {
  const openParenthesis = []
  const asterisk = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        openParenthesis.push(i)
        break
      case '*':
        asterisk.push(i)
        break
      default: // default case of (
        if (openParenthesis.length) {
          openParenthesis.pop()
        } else if (asterisk.length) {
          asterisk.pop()
        } else {
          return false
        }
    }
  }
  while (asterisk.length && openParenthesis.length) {
    if (openParenthesis.pop() > asterisk.pop()) {
      return false
    }
  }
  return openParenthesis.length === 0
}

console.log(checkValidString('(*))'))
// console.log(checkValidString('(*)'))
// console.log(checkValidString('()'))

console.log(
  checkValidString(
    '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())'
  )
)
