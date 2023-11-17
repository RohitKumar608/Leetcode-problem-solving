// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

//  solve this problem using the while loop with using i and j
var kthSmallest1 = function (matrix, k) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    result = result.concat(matrix[i])
  }
  result.sort((a, b) => a - b)
  return result[k - 1]
}

var kthSmallest = function (matrix, k) {
  const length = matrix.length
  let low = matrix[0][0]
  let high = matrix[length - 1][length - 1]
  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    const count = countLessThanOrEqualTo(matrix, mid)

    if (count < k) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}

function countLessThanOrEqualTo(matrix, target) {
  const n = matrix.length
  let count = 0
  let row = 0
  let col = n - 1

  while (row < n && col >= 0) {
    if (matrix[row][col] <= target) {
      count += col + 1
      row++
    } else {
      col--
    }
  }

  return count
}

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
)
