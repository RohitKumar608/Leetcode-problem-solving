/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        // top
        if (grid[i - 1] === undefined || grid[i - 1][j] === 0) {
          result++
        }
        // bottom
        if (grid[i + 1] === undefined || grid[i + 1][j] === 0) {
          result++
        }
        // left
        if (grid[i][j - 1] === undefined || grid[i][j - 1] === 0) {
          result++
        }
        // right
        if (grid[i][j + 1] === undefined || grid[i][j + 1] === 0) {
          result++
        }
      }
    }
  }
  return result
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
)
