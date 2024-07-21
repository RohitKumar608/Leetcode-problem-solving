/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  function dfs(src, adj, visit, path, order) {
    if (path.has(src)) return false
    if (visit.has(src)) return true
    visit.add(src)
    path.add(src)
    for (const nei of adj[src] || []) {
      if (!dfs(nei, adj, visit, path, order)) {
        return false
      }
    }
    path.delete(src)
    order.push(+src)
    return true
  }
  function topoSort(edges) {
    const adj = {}
    const path = new Set()
    const visit = new Set()
    const order = []
    for (const [src, dst] of edges) {
      if (!adj[src]) {
        adj[src] = []
      }
      adj[src].push(dst)
    }
    for (let i = 1; i <= k; i++) {
      if (!dfs(i, adj, visit, path, order)) {
        return []
      }
    }
    return order.reverse()
  }
  const rowOrder = topoSort(rowConditions)
  const colOrder = topoSort(colConditions)
  if (rowOrder.length === 0 || colOrder.length === 0) {
    return []
  }
  const rowToVal = rowOrder.reduce((acc, row, idx) => {
    acc[row] = idx
    return acc
  }, {})
  const colToVal = colOrder.reduce((acc, row, idx) => {
    acc[row] = idx
    return acc
  }, {})
  const res = new Array(k).fill([]).map(() => new Array(k).fill(0))
  for (let i = 1; i <= k; i++) {
    const r = rowToVal[i]
    const c = colToVal[i]
    res[r][c] = i
  }
  return res
}

console.log(
  buildMatrix(
    3,
    [
      [1, 2],
      [3, 2],
    ],
    [
      [2, 1],
      [3, 2],
    ]
  )
)
