/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  var ancestors = {}
  const result = new Array(n).fill([])
  for (const [from, to] of edges) {
    if (!ancestors[to]) ancestors[to] = []
    ancestors[to].push(from)
  }
  for (const key in ancestors) {
    let tempRes = []
    const stack = [...ancestors[key]]
    const visited = {}
    while (stack.length > 0) {
      const next = stack.pop()
      tempRes.push(next)
      if (!visited[next] && ancestors[next]) {
        stack.push(...ancestors[next])
        visited[next] = true
      }
    }
    result[+key] = [...new Set(tempRes)].sort((a, b) => a - b)
  }
  return result
}

// console.log(
//   getAncestors(9, [
//     [3, 6],
//     [2, 4],
//     [8, 6],
//     [7, 4],
//     [1, 4],
//     [2, 1],
//     [7, 2],
//     [0, 4],
//     [5, 0],
//     [4, 6],
//     [3, 2],
//     [5, 6],
//     [1, 6],
//   ])
// )

console.log(
  getAncestors(8, [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ])
)
