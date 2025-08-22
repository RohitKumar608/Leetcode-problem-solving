/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  let rowMinIdx = Infinity
  let rowMaxIdx = 0
  let colMinIdx = Infinity
  let colMaxIdx = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        rowMinIdx = Math.min(rowMinIdx, i)
        rowMaxIdx = Math.max(rowMaxIdx, i)
        colMinIdx = Math.min(colMinIdx, j)
        colMaxIdx = Math.max(colMaxIdx, j)
      }
    }
  }
  return (rowMaxIdx - rowMinIdx + 1) * (colMaxIdx - colMinIdx + 1)
}
console.log(
  minimumArea([
    [0, 1, 0],
    [1, 0, 1],
  ])
)
console.log(
  minimumArea([
    [1, 0],
    [0, 0],
  ])
)
