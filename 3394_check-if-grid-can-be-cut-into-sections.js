/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const horizontal = []
  const vertical = []
  for (const [x1, y1, x2, y2] of rectangles) {
    horizontal.push([x1, x2])
    vertical.push([y1, y2])
  }
  horizontal.sort((a, b) => a[0] - b[0])
  vertical.sort((a, b) => a[0] - b[0])

  function getCuts(points) {
    let cuts = 0
    let previousEnd = points[0][1]
    for (let i = 1; i < points.length; i++) {
      if (previousEnd <= points[i][0]) {
        cuts++
      }
      previousEnd = Math.max(previousEnd, points[i][1])
    }
    return cuts
  }
  if (getCuts(horizontal) >= 2) {
    return true
  }
  if (getCuts(vertical) >= 2) {
    return true
  }
  return false
}

console.log(
  checkValidCuts(4, [
    [0, 0, 1, 4],
    [1, 0, 2, 3],
    [2, 0, 3, 3],
    [3, 0, 4, 3],
    [1, 3, 4, 4],
  ])
)
