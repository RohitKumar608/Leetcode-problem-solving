/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */

var minimumCost = function (source, target, original, changed, cost) {
  const adj = {}
  const minCostMap = {}
  let minCost = 0
  for (let i = 0; i < original.length; i++) {
    if (!adj[original[i]]) {
      adj[original[i]] = []
    }
    adj[original[i]].push([changed[i], cost[i]])
  }

  function dijkstra(src) {
    const minHeap = new MinPriorityQueue({ priority: (a) => a[0] })
    minHeap.enqueue([0, src])
    const minCostMap = {}
    while (minHeap.size()) {
      const [cost, node] = minHeap.dequeue().element
      if (minCostMap[node] !== undefined) continue
      minCostMap[node] = cost
      for (const [neighbor, neiCost] of adj[node] || []) {
        const totalCost = cost + neiCost
        minHeap.enqueue([totalCost, neighbor])
      }
    }
    return minCostMap
  }
  const uniqueValue = [...new Set(source)]
  for (let i = 0; i < uniqueValue.length; i++) {
    minCostMap[uniqueValue[i]] = dijkstra(uniqueValue[i])
  }
  for (let i = 0; i < source.length; i++) {
    if (!minCostMap[source[i]]) {
      return -1
    }
    minCost += minCostMap[source[i]][target[i]]
  }
  if (Number.isNaN(minCost)) {
    return -1
  }
  return minCost
}

console.log(
  minimumCost(
    'abcd',
    'acbe',
    ['a', 'b', 'c', 'c', 'e', 'd'],
    ['b', 'c', 'b', 'e', 'b', 'e'],
    [2, 5, 5, 1, 2, 20]
  )
)
