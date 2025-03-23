/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const adjList = {}
  for (const edge of edges) {
    const [u, v] = edge
    if (adjList[u] === undefined) {
      adjList[u] = []
    }
    if (adjList[v] === undefined) {
      adjList[v] = []
    }
    adjList[u].push(v)
    adjList[v].push(u)
  }
  let result = 0
  const visited = new Set()
  function dfs(node, res) {
    visited.add(node)
    res.push(node)
    for (const neighbor of adjList[node] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, res)
      }
    }
    return res
  }
  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      const component = dfs(node, [])
      let isComplete = true
      for (const node of component) {
        if (adjList[node]?.length !== component.length - 1) {
          isComplete = false
          break
        }
      }
      if (isComplete || adjList[node] === undefined) {
        result++
      }
    }
  }
  return result
}

console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
)
