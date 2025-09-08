/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let a = 1
  let b = n - a
  while (`${b}`.includes('0') || `${a}`.includes('0')) {
    a += 1
    b -= 1
  }
  return [a, b]
}

console.log(getNoZeroIntegers(1010))
