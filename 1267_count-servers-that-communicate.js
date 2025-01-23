/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  let visited = {}
  const rows = grid.length
  const cols = grid[0].length
  let count = 0
  for (let i = 0; i < rows; i++) {
    let tempCount = 0
    const tempVisited = {}
    for (let j = 0; j < cols; j++) {
      tempCount += grid[i][j]
      if (grid[i][j] === 1) {
        tempVisited[`${i}, ${j}`] = true
      }
    }
    if (tempCount > 1) {
      count += tempCount
      visited = Object.assign(visited, tempVisited)
    }
  }
  for (let i = 0; i < cols; i++) {
    let tempCount = 0
    let visitedCount = 0
    for (let j = 0; j < rows; j++) {
      tempCount += grid[j][i]
      if (visited[`${j}, ${i}`]) {
        visitedCount++
      }
    }
    if (tempCount > 1) count += tempCount - visitedCount
  }
  return count
}

// console.log(
//   countServers([
//     [1, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ])
// )

console.log(
  countServers([
    [1, 0],
    [1, 1],
  ])
)
