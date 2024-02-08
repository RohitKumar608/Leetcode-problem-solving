// https://leetcode.com/problems/spiral-matrix-iv/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix1 = function (m, n, head) {
  const matrix = []
  for (let i = 0; i < m; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
      if (n === 1) {
        matrix[i][j] = head === null ? -1 : head.val
        if (head) head = head?.next
      } else {
        matrix[i][j] = 0
      }
    }
  }
  if (n === 1) return matrix
  let top = 0
  let bottom = m - 1
  let left = 0
  let right = n - 1
  while (left <= right && top <= bottom) {
    // for top row
    for (let i = left; i <= right; i++) {
      matrix[left][i] = head === null ? -1 : head.val
      if (head) head = head?.next
    }

    // for right column
    for (let i = top + 1; i <= bottom; i++) {
      matrix[i][right] = head === null ? -1 : head.val
      if (head) head = head?.next
    }

    // for bottom row
    for (let i = right - 1; i >= left; i--) {
      if (top === bottom) break
      matrix[bottom][i] = head === null ? -1 : head.val
      if (head) head = head?.next
    }

    // for left column
    for (let i = bottom - 1; i >= top + 1; i--) {
      matrix[i][top] = head === null ? -1 : head.val
      if (head) head = head?.next
    }
    top++
    bottom--
    left++
    right--
  }
  return matrix
}

var spiralMatrix = function (m, n, head) {
  const a = Array.from({ length: m }, () => new Array(n).fill(-1))
  let current = head
  let r = 0
  let c = 0
  let direction = 'right'
  while (current) {
    a[r][c] = current.val
    current = current.next
    switch (direction) {
      case 'right': {
        c++
        if (c === a[r].length || a[r][c] !== -1) {
          c--
          r++
          direction = 'down'
        }
        break
      }
      case 'down': {
        r++
        if (r === a.length || a[r][c] !== -1) {
          r--
          c--
          direction = 'left'
        }
        break
      }
      case 'left': {
        c--
        if (c === -1 || a[r][c] !== -1) {
          c++
          r--
          direction = 'up'
        }
        break
      }
      case 'up': {
        r--
        if (a[r][c] !== -1) {
          r++
          c++
          direction = 'right'
        }
        break
      }
    }
  }
  return a
}

// console.log(
//   spiralMatrix(3, 5, {
//     val: 3,
//     next: {
//       val: 0,
//       next: {
//         val: 2,
//         next: {
//           val: 6,
//           next: {
//             val: 8,
//             next: {
//               val: 1,
//               next: {
//                 val: 7,
//                 next: {
//                   val: 9,
//                   next: {
//                     val: 4,
//                     next: {
//                       val: 2,
//                       next: {
//                         val: 5,
//                         next: { val: 5, next: { val: 0, next: null } },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   })
// )

console.log(
  spiralMatrix(10, 1, {
    val: 8,
    next: {
      val: 24,
      next: {
        val: 5,
        next: {
          val: 21,
          next: {
            val: 10,
            next: {
              val: 11,
              next: {
                val: 11,
                next: {
                  val: 12,
                  next: { val: 6, next: { val: 17, next: null } },
                },
              },
            },
          },
        },
      },
    },
  })
)
