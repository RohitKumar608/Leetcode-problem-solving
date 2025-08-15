/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let currVal = 1
  while (n > currVal) {
    currVal *= 4
  }
  return currVal === n
}
