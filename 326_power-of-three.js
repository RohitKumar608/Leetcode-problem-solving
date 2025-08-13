// https://leetcode.com/problems/power-of-three

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 1) {
    if (n === 1) {
      return true
    }
    n = n / 3
  }
  return false
}

var isPowerOfThree = function (n) {
  if (n <= 0 || (n % 3 !== 0 && n > 1)) return false
  let currNum = 1
  while (currNum < n) {
    currNum *= 3
  }
  return currNum === n
}

console.log(isPowerOfThree(86217457695827338571))
