/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  for (let i = grid.length - 2; i >= 0; i--) {
    for (let j = grid.length - 1; j >= 0; j--) {
      let bottomMin = Infinity
      for (let k = 0; k < grid.length; k++) {
        if (j === k) continue
        bottomMin = Math.min(bottomMin, grid[i + 1][k])
      }

      grid[i][j] = grid[i][j] + bottomMin
    }
  }
  return Math.min(...grid[0])
}

console.log(
  minFallingPathSum([
    [-73, 61, 43, -48, -36],
    [3, 30, 27, 57, 10],
    [96, -76, 84, 59, -15],
    [5, -49, 76, 31, -7],
    [97, 91, 61, -46, 67],
  ])
)

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
