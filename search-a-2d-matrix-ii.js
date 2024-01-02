// https://leetcode.com/problems/search-a-2d-matrix-ii

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function binarySearch(matrix, target) {
  const mid = Math.floor(matrix.length / 2)
  if (matrix.length <= 1) return matrix[mid] === target
  if (matrix[mid] === target) return true
  const left = matrix.slice(0, mid)
  const right = matrix.slice(mid)
  if (target > matrix[mid]) {
    return binarySearch(right, target)
  } else {
    return binarySearch(left, target)
  }
}

var searchMatrix1 = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], target)) {
      return true
    }
  }
  return false
}
var searchMatrix = function (matrix, target) {
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true
    if (target > matrix[row][col]) {
      row++
    } else {
      col--
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
)
// console.log(
//   searchMatrix(
//     [
//       [1, 4, 7, 11, 15],
//       [2, 5, 8, 12, 19],
//       [3, 6, 9, 16, 22],
//       [10, 13, 14, 17, 24],
//       [18, 21, 23, 26, 30],
//     ],
//     20
//   )
// )
