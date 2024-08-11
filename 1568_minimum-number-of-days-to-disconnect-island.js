/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  const row = grid.length
  const col = grid[0].length
  function dfs(r, c, visit) {
    if (
      r < 0 ||
      c < 0 ||
      r >= row ||
      c >= col ||
      grid[r][c] == 0 ||
      visit.has(`${r},${c}`)
    ) {
      return
    }
    visit.add(`${r},${c}`)
    const neighbors = [
      [r + 1, c],
      [r, c + 1],
      [r - 1, c],
      [r, c - 1],
    ]
    for (const [r2, c2] of neighbors) {
      dfs(r2, c2, visit)
    }
  }

  function countIsland() {
    const visit = new Set()
    let count = 0
    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        if (grid[r][c] && !visit.has(`${r},${c}`)) {
          dfs(r, c, visit)
          count++
        }
      }
    }
    return count
  }
  if (countIsland() !== 1) {
    return 0
  }

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === 0) {
        continue
      }
      grid[r][c] = 0
      if (countIsland() != 1) {
        return 1
      }
      grid[r][c] = 1
    }
  }
  return 2
}

console.log(
  minDays([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
)

console.log(minDays([[1, 1]]))
console.log(
  minDays([
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
  ])
)

console.log(
  minDays([
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
  ])
)
