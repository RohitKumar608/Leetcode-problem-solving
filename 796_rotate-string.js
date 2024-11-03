/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (s.substring(i) + s.substring(0, i) === goal) return true
  }

  return false
}
