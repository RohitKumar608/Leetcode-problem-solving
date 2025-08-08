/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cache = new Map()
  function recursive(i, j) {
    if (cache.has(`${i},${j}`)) {
      return cache.get(`${i},${j}`)
    }
    if (i === m - 1 && j === n - 1) {
      return 1
    }
    if (i < 0 || j < 0 || i > m || j > n) {
      return 0
    }

    const downResult = recursive(i + 1, j)
    const rightResult = recursive(i, j + 1)
    cache.set(`${i},${j}`, downResult + rightResult)
    return downResult + rightResult
  }
  return recursive(0, 0)
}

console.log(uniquePaths(23, 12))
