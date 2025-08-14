/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  for (let i = 9; i >= 0; i--) {
    const number = `${i}`.repeat(3)
    if (num.includes(number)) {
      return number
    }
  }
  return ''
}
