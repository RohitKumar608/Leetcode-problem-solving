// https://leetcode.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const mid = Math.floor(matrix.length / 2)
  if (matrix[mid] === 'number' && matrix[mid] === target) return true
  if (
    (typeof matrix[mid] === 'number' || matrix[mid] === undefined) &&
    matrix.length <= 1
  ) {
    return matrix[mid] === target
  }

  if (matrix[mid] !== 'number' && matrix.length === 1) {
    const data = matrix[0]
    const mid = Math.floor(data.length / 2)
    const left = data.slice(0, mid)
    const right = data.slice(mid)

    if (data[mid] === target) {
      return true
    }

    if (target > data[mid]) {
      return searchMatrix(right, target)
    } else {
      return searchMatrix(left, target)
    }
  }
  const left = matrix.slice(0, mid)
  const right = matrix.slice(mid)
  if (typeof matrix[mid] !== 'number') {
    if (matrix[mid][0] === target) return true
    if (target > matrix[mid][0]) {
      return searchMatrix(right, target)
    } else {
      return searchMatrix(left, target)
    }
  } else {
    if (matrix[mid] === target) return true
    if (target > matrix[mid]) {
      return searchMatrix(right, target)
    } else {
      return searchMatrix(left, target)
    }
  }
}

// console.log(searchMatrix([[1]], 1))
// console.log(searchMatrix([[1], [3]], 0))
// console.log(searchMatrix([[1], [3]], 3))
// console.log(searchMatrix([[1, 3, 5]], 5))
console.log(
  searchMatrix(
    [
      [-8, -7, -5, -3, -3, -1, 1],
      [2, 2, 2, 3, 3, 5, 7],
      [8, 9, 11, 11, 13, 15, 17],
      [18, 18, 18, 20, 20, 20, 21],
      [23, 24, 26, 26, 26, 27, 27],
      [28, 29, 29, 30, 32, 32, 34],
    ],
    -5
  )
)
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// )
// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// )
