/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let islandCount = 0
  const row = grid1.length
  const col = grid1[0].length
  function dfs(r, c) {
    if (r >= row || c >= col || r < 0 || c < 0 || grid2[r][c] === 0) {
      return 1
    }

    grid2[r][c] = 0
    grid1[r][c] = 0
    const neighbors = [
      [r + 1, c],
      [r, c + 1],
      [r - 1, c],
      [r, c - 1],
    ]
    let res = 1
    for (const [r2, c2] of neighbors) {
      res = Math.min(dfs(r2, c2), res)
    }
    return res
  }

  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      if (grid1[i][j] && grid2[i][j]) {
        if (dfs(i, j) == 1) {
          islandCount++
        }
      }
    }
  }
  return islandCount
}

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
)

console.log(
  countSubIslands(
    [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
    ],
    [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]
  )
)
