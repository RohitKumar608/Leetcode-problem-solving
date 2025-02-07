/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const result = []
  const balls = new Map()
  const colors = new Map()
  for (const [ball, color] of queries) {
    if (balls.has(ball)) {
      const prevColor = balls.get(ball)
      colors.set(prevColor, colors.get(prevColor) - 1)
      if (colors.get(prevColor) === 0) {
        colors.delete(prevColor)
      }
    }
    balls.set(ball, color)
    colors.set(color, (colors.get(color) || 0) + 1)
    result.push(colors.size)
  }
  return result
}

console.log(
  queryResults(4, [
    [1, 4],
    [2, 5],
    [1, 3],
    [3, 4],
  ])
)

// console.log(
//   queryResults(4, [
//     [0, 1],
//     [1, 2],
//     [2, 2],
//     [3, 4],
//     [4, 5],
//   ])
// )

// console.log(
//   queryResults(1, [
//     [0, 1],
//     [0, 4],
//     [1, 2],
//     [1, 5],
//     [1, 4],
//   ])
// )
