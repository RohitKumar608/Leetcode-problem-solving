/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const frequency = {}
  let maxVal = 0
  let centerEdge = ''
  for (const [vertex1, vertex2] of edges) {
    frequency[vertex1] = (frequency[vertex1] || 0) + 1
    frequency[vertex2] = (frequency[vertex2] || 0) + 1
    if (maxVal < frequency[vertex1]) {
      centerEdge = vertex1
      maxVal = frequency[vertex1]
    }
    if (maxVal < frequency[vertex2]) {
      centerEdge = vertex2
      maxVal = frequency[vertex2]
    }
  }
  return centerEdge
}

var findCenter = function (edges) {
  const [[a, b], [c, d]] = edges

  return a === c || b === c ? c : d
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
)
