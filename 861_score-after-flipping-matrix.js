/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) {
      grid[i] = grid[i].map((val) => (val === 0 ? 1 : 0))
    }
  }
  for (let i = 0; i < grid[0].length; i++) {
    let zeroCount = 0
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 0) zeroCount++
    }
    if (zeroCount > Math.floor(grid.length / 2)) {
      for (let j = 0; j < grid.length; j++) {
        grid[j][i] = grid[j][i] === 0 ? 1 : 0
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    result += parseInt(
      grid[i].reduce((a, b) => a + b, ''),
      2
    )
  }

  return result
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
)
