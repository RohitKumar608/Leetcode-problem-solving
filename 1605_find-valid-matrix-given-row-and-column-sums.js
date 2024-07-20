/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const matrix = new Array(rowSum.length)
    .fill([])
    .map((val) => new Array(colSum.length).fill(0))
  for (let i = 0; i < rowSum.length; i++) {
    matrix[i][0] = rowSum[i]
  }
  for (let c = 0; c < colSum.length; c++) {
    let currColSum = 0
    for (let r = 0; r < rowSum.length; r++) {
      currColSum += matrix[r][c]
    }
    let r = 0
    while (currColSum > colSum[c]) {
      const diff = currColSum - colSum[c]
      const maxShift = Math.min(diff, matrix[r][c])
      matrix[r][c] -= maxShift
      matrix[r][c + 1] += maxShift
      currColSum -= maxShift
      r = r + 1
    }
  }
  return matrix
}

var restoreMatrix = function (rowSum, colSum) {
  let n = rowSum.length,
    m = colSum.length,
    ans = Array.from({ length: n }, () => new Array(m))
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      let val = Math.min(rowSum[i], colSum[j])
      ans[i][j] = val
      rowSum[i] -= val
      colSum[j] -= val
    }
  return ans
}

console.log(restoreMatrix([5, 7, 10], [8, 6, 8]))
