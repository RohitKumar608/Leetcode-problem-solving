/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (matrix) {
  const r = matrix.length
  const c = matrix[0].length
  const precomMat = []
  let result = 0
  for (let i = 0; i < r; i++) {
    precomMat[i] = []
    let count = 0
    for (let j = c - 1; j >= 0; j--) {
      if (matrix[i][j]) {
        count++
      } else {
        count = 0
      }
      precomMat[i][j] = count
    }
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let recCount = Infinity
      for (let k = i; k < r; k++) {
        recCount = Math.min(recCount, precomMat[k][j])
        result += recCount
      }
    }
  }
  return result
}
