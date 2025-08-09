/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true
  let num = n
  while (num >= 1) {
    if (num === 2) {
      return true
    }
    num = num / 2
  }
  return false
}

var isPowerOfTwo = function (n) {
  let count = 0
  let currVal = Math.pow(2, count)
  while (n >= currVal) {
    if (currVal === n) return true
    count++
    currVal = Math.pow(2, count)
  }
  return false
}
