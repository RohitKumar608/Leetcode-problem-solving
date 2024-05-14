/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let result = 0
  function dfs(i, j, visit) {
    if (
      visit.has(`${i},${j}`) ||
      Math.min(i, j) < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i] === undefined ||
      grid[i][j] === 0
    ) {
      return 0
    }
    visit.add(`${i},${j}`)
    const result = Math.max(
      grid[i][j] + dfs(i - 1, j, visit),
      grid[i][j] + dfs(i + 1, j, visit),
      grid[i][j] + dfs(i, j + 1, visit),
      grid[i][j] + dfs(i, j - 1, visit)
    )
    visit.delete(`${i},${j}`)

    return result
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      result = Math.max(result, dfs(i, j, new Set()))
    }
  }

  return result
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
)
