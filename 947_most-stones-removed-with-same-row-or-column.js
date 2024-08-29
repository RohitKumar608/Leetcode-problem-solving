/**
 * @param {number[][]} stones
 * @return {number}
 */

var removeStones = function (stones) {
  const n = stones.length
  const adj = Array.from({ length: n }, () => [])

  // Build the graph
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        adj[i].push(j)
        adj[j].push(i)
      }
    }
  }

  const visited = new Set()

  function dfs(node) {
    visited.add(node)
    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor)
      }
    }
  }

  let numComponents = 0

  // Find the number of connected components
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i)
      numComponents++
    }
  }

  return n - numComponents
}
