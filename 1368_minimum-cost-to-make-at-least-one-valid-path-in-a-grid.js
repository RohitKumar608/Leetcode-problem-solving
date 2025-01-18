/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const m = grid.length
  const n = grid[0].length
  const minCost = { '0,0': 0 }
  const queue = [[0, 0, 0]]
  while (queue.length) {
    const [x, y, cost] = queue.shift()
    for (let i = 0; i < 4; i++) {
      const [dx, dy] = direction[i]
      const newX = x + dx
      const newY = y + dy
      if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
        const newCost = cost + (grid[x][y] !== i + 1)
        if (
          minCost[`${newX},${newY}`] === undefined ||
          newCost < minCost[`${newX},${newY}`]
        ) {
          minCost[`${newX},${newY}`] = newCost
          queue.push([newX, newY, newCost])
        }
      }
    }
  }
  return minCost[`${m - 1},${n - 1}`]
}

console.log(
  minCost([
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
  ])
)
