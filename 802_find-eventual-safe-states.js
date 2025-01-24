/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const edges = {}
  const result = []
  const visitedNodes = new Map()
  for (let i = 0; i < graph.length; i++) {
    edges[i] = graph[i]
  }
  function dfs(val) {
    if (visitedNodes.has(val)) {
      return visitedNodes.get(val)
    }
    if (edges[val].length == 0) {
      return true
    }
    let result = true
    visitedNodes.set(val, false)
    for (let i = 0; i < edges[val].length; i++) {
      result &&= dfs(edges[val][i])
    }
    visitedNodes.set(val, result)
    return result
  }
  for (const key in edges) {
    const arr = []
    for (let i = 0; i < edges[key].length; i++) {
      arr.push(dfs(edges[key][i]))
    }
    visitedNodes.set(
      key,
      arr.reduce((a, b) => a && b, true)
    )
    if (arr.reduce((a, b) => a && b, true)) {
      result.push(+key)
    }
  }
  return result
}

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]))
console.log(eventualSafeNodes([[], [0, 2, 3, 4], [3], [4], []]))
console.log(
  eventualSafeNodes([
    [4, 9],
    [3, 5, 7],
    [0, 3, 4, 5, 6, 8],
    [7, 8, 9],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [7, 9],
    [8, 9],
    [9],
    [],
  ])
)
