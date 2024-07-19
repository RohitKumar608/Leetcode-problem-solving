/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const result = []
  const maxColVal = {}
  for (let i = 0; i < matrix[0].length; i++) {
    let maxVal = -Infinity
    for (let j = 0; j < matrix.length; j++) {
      maxVal = Math.max(maxVal, matrix[j][i])
    }
    maxColVal[i] = maxVal
  }
  for (let i = 0; i < matrix.length; i++) {
    let minVal = Infinity
    let idx = i
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minVal) {
        minVal = matrix[i][j]
        idx = j
      }
    }
    if (minVal === maxColVal[idx]) {
      result.push(minVal)
    }
  }
  return result
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
)

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
)
