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

console.log(isPowerOfThree(86217457695827338571))
