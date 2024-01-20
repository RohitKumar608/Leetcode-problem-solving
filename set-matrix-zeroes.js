// https://leetcode.com/problems/set-matrix-zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroIdxs = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIdxs.push([i, j])
      }
    }
  }
  for (let idx = 0; idx < zeroIdxs.length; idx++) {
    const [row, col] = zeroIdxs[idx]
    // for top to bottom
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0
    }

    // for left to right
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0
    }
  }
  return matrix
}

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// )
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
)
