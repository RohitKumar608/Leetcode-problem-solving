/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let maxDiagonalLen = 0
  let result = 0
  dimensions.sort((a, b) => a[0] - b[0])
  for (const [length, width] of dimensions) {
    const calc = Math.sqrt(length * length + width * width)
    if (calc >= maxDiagonalLen) {
      maxDiagonalLen = calc
      result = length * width
    }
  }
  return result
}

console.log(
  areaOfMaxDiagonal([
    [6, 5],
    [8, 6],
    [2, 10],
    [8, 1],
    [9, 2],
    [3, 5],
    [3, 5],
  ])
)
