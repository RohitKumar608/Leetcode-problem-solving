/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islandsNum = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        islandsNum++
        dfs(i, j, grid)
      }
    }
  }

  return islandsNum
}

const dfs = (i, j, grid) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] == '0'
  )
    return
  grid[i][j] = '0'
  dfs(i - 1, j, grid) // up
  dfs(i, j + 1, grid) // right
  dfs(i + 1, j, grid) // down
  dfs(i, j - 1, grid) // left
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
)

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
)

console.log(numIslands([['1']]))
