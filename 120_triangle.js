/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const rowLen = triangle.length
  const colLen = triangle[triangle.length - 1].length
  const map = new Map()
  function getMinimumTotal(row, col) {
    const key = `${row},${col}`
    if (map.has(key)) {
      return map.get(key)
    }
    if (row >= rowLen) return 0
    if (col >= colLen) return 0
    const f1 = triangle[row][col] + getMinimumTotal(row + 1, col)
    let f2 = Infinity
    if (col <= colLen) {
      f2 = triangle[row][col] + getMinimumTotal(row + 1, col + 1)
    }
    map.set(key, Math.min(f1, f2))
    return Math.min(f1, f2)
  }
  return getMinimumTotal(0, 0)
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
