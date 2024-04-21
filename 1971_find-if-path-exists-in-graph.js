/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const nodeEdges = {}
  const visited = {}
  for (let i = 0; i < edges.length; i++) {
    const [vertex1, vertex2] = edges[i]
    if (!nodeEdges[vertex2]) {
      nodeEdges[vertex2] = [vertex1]
    } else {
      nodeEdges[vertex2].push(vertex1)
    }
    if (!nodeEdges[vertex1]) {
      nodeEdges[vertex1] = [vertex2]
    } else {
      nodeEdges[vertex1].push(vertex2)
    }
  }
  const stack = [source]
  while (stack.length) {
    const edge = stack.shift()
    if (!visited[edge]) {
      stack.push(...nodeEdges[edge])
    }
    visited[edge] = true
    if (edge === destination) {
      return true
    }
  }
  return false
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
)

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
)
