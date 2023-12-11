/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const result = []
  for (let j = 0; j < matrix[0].length; j++) {
    result[j] = []
    for (let i = 0; i < matrix.length; i++) {
      result[j][i] = matrix[i][j]
    }
  }
  return result
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
