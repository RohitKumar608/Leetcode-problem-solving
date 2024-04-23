/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const adj = {}
  for (let i = 0; i < edges.length; i++) {
    const [n1, n2] = edges[i]
    if (!adj[n1]) {
      adj[n1] = [n2]
    } else {
      adj[n1].push(n2)
    }
    if (!adj[n2]) {
      adj[n2] = [n1]
    } else {
      adj[n2].push(n1)
    }
  }
  const edgeCount = {}
  const leaves = []
  for (const [src, neighbors] of Object.entries(adj)) {
    if (neighbors.length === 1) {
      leaves.push(src)
    }
    edgeCount[src] = neighbors.length
  }
  while (leaves.length) {
    if (n <= 2) {
      return leaves
    }
    const len = leaves.length
    for (let i = 0; i < len; i++) {
      const node = leaves.shift()
      n--
      for (const nei of adj[node]) {
        edgeCount[nei]--
        if (edgeCount[nei] === 1) {
          leaves.push(nei)
        }
      }
    }
  }
  return []
}

console.log(
  findMinHeightTrees(4, [
    [1, 0],
    [1, 2],
    [1, 3],
  ])
)
