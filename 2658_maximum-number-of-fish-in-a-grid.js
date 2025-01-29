/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 0) {
        const visited = new Set()
        const fish = dfs(i, j, visited)
        result = Math.max(result, fish)
      }
    }
  }

  function dfs(i, j, visited) {
    if (
      visited.has(`${i}-${j}`) ||
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === 0
    )
      return 0
    visited.add(`${i}-${j}`)
    const fish = grid[i][j]
    // grid[i][j] = 0
    const left = dfs(i, j - 1, visited)
    const right = dfs(i, j + 1, visited)
    const up = dfs(i - 1, j, visited)
    const down = dfs(i + 1, j, visited)
    // grid[i][j] = fish
    return fish + left + right + up + down
  }
  return result
}

console.log(
  findMaxFish([
    [0, 2, 1, 0],
    [4, 0, 0, 3],
    [1, 0, 0, 4],
    [0, 3, 2, 0],
  ])
)

console.log(
  findMaxFish([
    [8, 6],
    [2, 6],
  ])
)
