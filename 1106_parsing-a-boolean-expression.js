/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let s = expression
  let i = 0
  function helper() {
    const c = s[i]
    i = i + 1
    if (c === 't') return true
    if (c === 'f') return false
    if (c === '!') {
      i = i + 1
      const res = !helper()
      i = i + 1
      return res
    }
    const children = []
    i = i + 1
    while (s[i] !== ')') {
      if (s[i] !== ',') {
        children.push(helper())
      } else {
        i = i + 1
      }
    }
    i = i + 1
    if (c === '&') {
      return children.reduce((a, b) => a && b, true)
    }
    if (c === '|') {
      return children.reduce((a, b) => a || b, false)
    }
  }
  return helper()
}
