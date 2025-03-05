/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
  let result = 1
  for (let i = 1; i < n; i++) {
    result += 4 * i
  }
  return result
}
