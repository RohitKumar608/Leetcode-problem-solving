/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let n = grid[0].length
  let top = Array(n).fill(0)
  let bottom = Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    top[i] = (i === 0 ? 0 : top[i - 1]) + grid[0][i]
    bottom[i] = (i === 0 ? 0 : bottom[i - 1]) + grid[1][i]
  }

  let result = Infinity
  for (let i = 0; i < n; i++) {
    let topScore = top[n - 1] - top[i]
    let bottomScore = i === 0 ? 0 : bottom[i - 1]
    result = Math.min(result, Math.max(topScore, bottomScore))
  }

  return result
}

console.log(
  gridGame([
    [3, 3, 1],
    [8, 5, 2],
  ])
)
