/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const ROWS = matrix.length
  const COLS = matrix[0].length
  const cache = {}
  function dfs(r, c) {
    if (c >= COLS || r >= ROWS || matrix[r][c] === 0) {
      return 0
    }
    if (cache[`${r},${c}`] !== undefined) {
      return cache[`${r},${c}`]
    }
    cache[`${r},${c}`] =
      1 + Math.min(dfs(r + 1, c), dfs(r, c + 1), dfs(r + 1, c + 1))
    return cache[`${r},${c}`]
  }
  let res = 0
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      res += dfs(i, j)
    }
  }
  return res
}
