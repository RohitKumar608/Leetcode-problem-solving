/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const toEdge = new Map()
  for (const [from, to] of edges) {
    toEdge.set(to, true)
  }
  const result = []
  for (let i = 0; i < n; i++) {
    if (!toEdge.has(i)) {
      result.push(i)
    }
    if (result.length > 1) {
      return -1
    }
  }
  return result[0]
}

console.log(
  findChampion(4, [
    [0, 2],
    [1, 3],
    [1, 2],
  ])
)
console.log(
  findChampion(3, [
    [0, 1],
    [1, 2],
  ])
)
