/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const row = grid.length
  const col = grid[0].length
  const map = {}
  function dfs(r, c, prevVal, currVal) {
    if (r < 0 || c < 0 || r >= row || c >= col) {
      return 0
    }
    if (prevVal >= currVal) {
      return 0
    }
    if (map[`${r},${c}`] !== undefined) {
      return map[`${r},${c}`]
    }
    const operations = [
      [r - 1, c + 1],
      [r, c + 1],
      [r + 1, c + 1],
    ]
    let result = 0
    for (const [r1, c1] of operations) {
      if (r1 < 0 || c1 >= col || r1 >= row || currVal >= grid[r1][c1]) {
        continue
      }

      result = Math.max(result, 1 + dfs(r1, c1, currVal, grid[r1][c1]))
    }
    map[`${r},${c}`] = result
    return map[`${r},${c}`]
  }
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    result = Math.max(result, dfs(i, 0, -Infinity, grid[i][0]))
  }
  return result
}

console.log(
  maxMoves([
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15],
  ])
)

console.log(
  maxMoves([
    [187, 167, 209, 251, 152, 236, 263, 128, 135],
    [267, 249, 251, 285, 73, 204, 70, 207, 74],
    [189, 159, 235, 66, 84, 89, 153, 111, 189],
    [120, 81, 210, 7, 2, 231, 92, 128, 218],
    [193, 131, 244, 293, 284, 175, 226, 205, 245],
  ])
)
