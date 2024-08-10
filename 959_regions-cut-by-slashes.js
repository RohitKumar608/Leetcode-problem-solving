/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const row = grid[0].length * 3
  const col = grid.length * 3
  const grid2 = new Array(col).fill([]).map(() => new Array(row).fill(0))
  for (let r = 0; r < grid[0].length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const r2 = r * 3
      const c2 = c * 3
      if (grid[r][c] === '/') {
        grid2[r2][c2 + 2] = 1
        grid2[r2 + 1][c2 + 1] = 1
        grid2[r2 + 2][c2] = 1
      }
      if (grid[r][c] === '\\') {
        grid2[r2 + 2][c2 + 2] = 1
        grid2[r2 + 1][c2 + 1] = 1
        grid2[r2][c2] = 1
      }
    }
  }

  function dfs(r, c, visit) {
    if (
      r < 0 ||
      c < 0 ||
      r >= row ||
      c >= col ||
      grid2[r][c] !== 0 ||
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
    for (const [r1, c1] of neighbors) {
      dfs(r1, c1, visit)
    }
  }

  const visit = new Set()
  let res = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] === 0 && !visit.has(`${i},${j}`)) {
        dfs(i, j, visit)
        res++
      }
    }
  }
  return res
}

console.log(regionsBySlashes(['/\\', '\\/']))
