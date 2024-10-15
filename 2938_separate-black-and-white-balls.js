/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  let countZero = 0
  let result = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      countZero++
    } else {
      result += countZero
    }
  }
  return result
}
