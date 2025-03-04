/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n > 0) {
    if (n % 3 === 2) {
      return false
    }
    n = Math.floor(n / 3)
  }
  return true
}

// Test cases
console.log(checkPowersOfThree(12)) // true
console.log(checkPowersOfThree(91)) // true
console.log(checkPowersOfThree(21)) // false
console.log(checkPowersOfThree(1)) // true
