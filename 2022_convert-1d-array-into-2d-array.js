/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return []
  const result = []

  for (let i = 0; i < m; i++) {
    result.push(original.slice(n * i, n * i + n))
  }
  return result
}

console.log(construct2DArray([1, 1, 1, 1], 4, 1))
console.log(construct2DArray([1, 3, 5, 2, 4, 6], 2, 3))
