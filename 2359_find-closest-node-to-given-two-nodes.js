/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const adj = {}
  for (let i = 0; i < edges.length; i++) {
    if (!adj[i]) {
      adj[i] = []
    }
    adj[i].push(edges[i])
  }
  function dfs(src, distMap) {
    const q = []
    q.push([src, 0])
    distMap[src] = 0
    while (q.length) {
      const [node, dist] = q.shift()
      for (const nei of adj[node] || []) {
        if (distMap[nei] === undefined) {
          q.push([nei, dist + 1])
          distMap[nei] = dist + 1
        }
      }
    }
  }
  const node1Dist = {}
  const node2Dist = {}
  dfs(node1, node1Dist)
  dfs(node2, node2Dist)
  let res = -1
  let restDist = Infinity
  for (let i = 0; i < edges.length; i++) {
    if (node1Dist[i] !== undefined && node2Dist[i] !== undefined) {
      const dist = Math.max(node1Dist[i], node2Dist[i])
      console.log(dist)
      if (dist < restDist) {
        res = i
        restDist = dist
      }
    }
  }
  return res
}

// console.log(closestMeetingNode([2, 2, 3, -1], 0, 1))
// console.log(closestMeetingNode([1, 2, -1], 0, 2))
console.log(closestMeetingNode([4, 4, 4, 5, 1, 2, 2], 1, 1))
