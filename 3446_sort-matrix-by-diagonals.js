/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var sortMatrix = function (grid) {
  let row = grid.length - 1
  let col = 0
  while (col < grid[0].length) {
    let tempRow = Math.max(row, 0)
    let tempCol = col
    const diagonalValues = []
    while (tempRow < grid.length && tempCol < grid[0].length) {
      diagonalValues.push(grid[tempRow][tempCol])
      tempRow++
      tempCol++
    }
    if (row >= 0) diagonalValues.sort((a, b) => b - a)
    else diagonalValues.sort((a, b) => a - b)
    tempRow = Math.max(row, 0)
    tempCol = col
    let count = 0
    while (tempRow < grid.length && tempCol < grid[0].length) {
      grid[tempRow][tempCol] = diagonalValues[count]
      count++
      tempRow++
      tempCol++
    }
    if (row >= 0) {
      row--
    }
    if (row < 0) {
      col++
    }
  }
  return grid
}
