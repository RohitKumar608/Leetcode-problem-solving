/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0
  let right = Math.floor(Math.sqrt(c))
  while (left < right) {
    const sum = left * left + right * right
    if (sum === c) {
      return true
    }
    if (sum < c) {
      left++
    } else {
      right--
    }
  }
  return false
}

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(4))
