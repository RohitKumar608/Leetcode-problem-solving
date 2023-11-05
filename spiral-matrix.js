/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  if (matrix.length - 1 === 0) return matrix[0]
  if (matrix[0].length - 1 === 0) {
    return matrix.reduce((a, b) => a.concat(b), [])
  }
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  const result = []
  while (left <= right && left <= right) {
    //  top
    for (let i = left; i <= right; i++) {
      if (matrix[left][i] !== undefined) result.push(matrix[left][i])
    }
    // right
    for (let i = left + 1; i <= right - 1; i++) {
      if (matrix[i][right] !== undefined) result.push(matrix[i][right])
    }
    //bottom
    for (let i = bottom; i >= top; i--) {
      if (top !== bottom && matrix[bottom][i] !== undefined)
        result.push(matrix[bottom][i])
    }
    //left
    for (let i = bottom - 1; i > top; i--) {
      if (top !== bottom && matrix[i][top] !== undefined)
        result.push(matrix[i][top])
    }
    left++
    right--
    top++
    bottom--
  }
  return result
}

console.log(
  spiralOrder([
    [2, 5],
    [8, 4],
    [0, -1],
  ])
)
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
)
