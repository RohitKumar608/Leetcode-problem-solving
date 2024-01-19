// https://leetcode.com/problems/set-matrix-zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeroIdx = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        zeroIdx.push([i, j])
      }
    }
  }
  for (let idx = 0; idx < zeroIdx.length; idx++) {
    const [row, col] = zeroIdx[idx]
    // for top
    for (let i = row - 1; i >= 0; i--) {}
  }
  console.log(zeroIdx)
}
