/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function (n) {
  let count = 0
  let result = 0
  const weekSum = 28
  while (n > 6) {
    n = n - 7
    result += weekSum + count * 7
    count++
  }
  result += (n * (n + 1)) / 2 + n * count
  return result
}

console.log(totalMoney(20))
