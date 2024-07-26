/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

var findTheCity = function (n, edges, distanceThreshold) {
  const graph = Array.from({ length: n }, () => [])
  for (const [node1, node2, distance] of edges) {
    graph[node1].push([node2, distance])
    graph[node2].push([node1, distance])
  }

  const get_number_of_neighbors_in_distance = (source) => {
    const minHeap = new MinPriorityQueue({ priority: (a) => a[0] })
    minHeap.enqueue([0, source])
    const visited = new Set()

    while (minHeap.size()) {
      const [distance_to_this_node, cur_node] = minHeap.dequeue().element
      if (!visited.has(cur_node)) {
        visited.add(cur_node)
        for (const [neighbor, distance] of graph[cur_node]) {
          const distance_from_source = distance_to_this_node + distance
          if (distance_from_source <= distanceThreshold) {
            // ensure that we're allowed to go to this node
            minHeap.enqueue([distance_from_source, neighbor])
          }
        }
      }
    }
    return visited.size - 1
  }

  let minimum_number = n
  let res = null

  for (let source = 0; source < n; source++) {
    const neighbors = get_number_of_neighbors_in_distance(source)
    if (neighbors <= minimum_number) {
      minimum_number = neighbors
      res = source
    }
  }

  return res
}

console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  )
)
