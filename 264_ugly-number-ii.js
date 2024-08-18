/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
  const result = [1]
  let i2 = 0
  let i3 = 0
  let i5 = 0
  for (let i = 1; i <= n; i++) {
    result[i] = Math.min(
      Math.min(result[i2] * 2, result[i3] * 3),
      result[i5] * 5
    )
    if (result[i] == result[i2] * 2) i2++
    if (result[i] == result[i3] * 3) i3++
    if (result[i] == result[i5] * 5) i5++
  }
  return result[n - 1]
}

console.log(nthUglyNumber(10))
