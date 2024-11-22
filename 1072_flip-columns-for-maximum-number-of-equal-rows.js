/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  const map = {}
  let result = 1
  for (let i = 0; i < matrix.length; i++) {
    const flipValKey = matrix[i].map((val) => (val === 1 ? 0 : 1)).join('')
    const strVal = matrix[i].join('')
    map[flipValKey] = (map[flipValKey] || 0) + 1
    map[strVal] = (map[strVal] || 0) + 1
    result = Math.max(result, Math.min(map[flipValKey], map[strVal]))
  }
  return result
}

console.log(
  maxEqualRowsAfterFlips([
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 0],
  ])
)
