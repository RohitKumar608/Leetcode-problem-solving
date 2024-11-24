/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let minNumber = Infinity
  let sum = 0
  let negativeNumCount = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < 0) {
        negativeNumCount++
      }
      minNumber = Math.min(minNumber, Math.abs(matrix[i][j]))
      sum += Math.abs(matrix[i][j])
    }
  }
  return negativeNumCount % 2 !== 0 ? sum - 2 * Math.abs(minNumber) : sum
}

console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
)

// console.log(
//   maxMatrixSum([
//     [-1, 0, -1],
//     [-2, 1, 3],
//     [3, 2, 2],
//   ])
// )
