/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  const matrix = new Array(m).fill([]).map((idx) => new Array(n).fill(0))
  let result = 0
  for (const [i, j] of walls) {
    matrix[i][j] = 2
  }
  for (const [i, j] of guards) {
    matrix[i][j] = 1
  }
  for (const [i, j] of guards) {
    //  for top column
    for (let row = i - 1; row >= 0; row--) {
      if (matrix[row][j] === 1 || matrix[row][j] === 2) {
        break
      }
      matrix[row][j] = 3
    }
    // for bottom column
    for (let row = i + 1; row < m; row++) {
      if (matrix[row][j] === 1 || matrix[row][j] === 2) {
        break
      }
      matrix[row][j] = 3
    }
    // for left row
    for (let col = j - 1; col >= 0; col--) {
      if (matrix[i][col] === 1 || matrix[i][col] === 2) {
        break
      }
      matrix[i][col] = 3
    }
    // for right row
    for (let col = j + 1; col < n; col++) {
      if (matrix[i][col] === 1 || matrix[i][col] === 2) {
        break
      }
      matrix[i][col] = 3
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) result++
    }
  }
  return result
}

console.log(
  countUnguarded(
    4,
    6,
    [
      [0, 0],
      [1, 1],
      [2, 3],
    ],
    [
      [0, 1],
      [2, 2],
      [1, 4],
    ]
  )
)
