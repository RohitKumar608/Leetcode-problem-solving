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
    const result = Math.min(
      triangle[row][col] + getMinimumTotal(row + 1, col),
      triangle[row][col] + getMinimumTotal(row + 1, col + 1)
    )
    map.set(key, result)
    return result
  }
  return getMinimumTotal(0, 0)
}
