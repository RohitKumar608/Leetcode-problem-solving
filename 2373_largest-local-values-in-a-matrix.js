/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const row = grid.length - 2
  const col = grid.length - 2
  const result = []
  for (let i = 0; i < row; i++) {
    result[i] = []
    for (let j = 0; j < col; j++) {
      let maxVal = 0
      for (let k = i; k < 3 + i; k++) {
        for (let l = j; l < 3 + j; l++) {
          maxVal = Math.max(maxVal, grid[k][l])
        }
      }
      result[i][j] = maxVal
    }
  }
  return result
}

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
)

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
)
