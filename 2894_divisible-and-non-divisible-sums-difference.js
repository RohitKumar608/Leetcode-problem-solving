/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  const sum = (n * (n + 1)) / 2
  let multiplierSum = 0
  for (let i = 1; i <= n / m; i++) {
    multiplierSum += i * m
  }
  return sum - 2 * multiplierSum
}
