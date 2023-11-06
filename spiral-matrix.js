/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  const result = []
  while (left <= right && top <= bottom && left <= right) {
    //  top
    for (let i = left; i <= right; i++) {
      result.push(matrix[left][i])
    }
    // right
    for (let i = left + 1; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    //bottom
    for (let i = right - 1; i >= left; i--) {
      if (top !== bottom && matrix[bottom][i] !== undefined) {
        result.push(matrix[bottom][i])
      }
    }
    //left
    for (let i = bottom - 1; i > top; i--) {
      if (left !== right && matrix[i][top] !== undefined) {
        result.push(matrix[i][top])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return result
}

// console.log(
//   spiralOrder([
//     [2, 5],
//     [8, 4],
//     [0, -1],
//   ])
// )
// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ])
// )

// console.log(
//   spiralOrder([
//     [2, 5, 8],
//     [4, 0, -1],
//   ])
// )

console.log(
  spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16],
  ])
)
