// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes1 = function (root) {
  let result = 0
  function bfs(root, arr) {
    if (!root) return
    if (arr.length === 0 || root.val >= arr[arr.length - 1]) {
      console.log(root.val, structuredClone(arr))
      result++
    }
    const sortedArr = [...arr, root.val].sort((a, b) => a - b)
    bfs(root.left, sortedArr)
    bfs(root.right, sortedArr)
  }
  bfs(root, [])
  return result
}

var goodNodes = function (root) {
  function bfs(root, maxVal) {
    if (!root) return 0
    let result = 0

    if (root.val >= maxVal) {
      result++
    }
    maxVal = Math.max(maxVal, root.val)
    result += bfs(root.left, maxVal) + bfs(root.right, maxVal)
    return result
  }
  return bfs(root, -Infinity)
}

console.log(
  goodNodes({
    val: -1,
    left: {
      val: 5,
      left: { val: 4, left: null, right: null },
      right: {
        val: 4,
        left: {
          val: -4,
          left: {
            val: 0,
            left: { val: 3, left: null, right: null },
            right: null,
          },
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: -2,
      left: {
        val: 2,
        left: {
          val: -2,
          left: { val: -1, left: null, right: null },
          right: null,
        },
        right: {
          val: 3,
          left: { val: -3, left: null, right: null },
          right: null,
        },
      },
      right: {
        val: -2,
        left: null,
        right: {
          val: -2,
          left: { val: -4, left: null, right: null },
          right: {
            val: -3,
            left: { val: 3, left: null, right: null },
            right: { val: -3, left: null, right: null },
          },
        },
      },
    },
  })
)
// console.log(
//   goodNodes1({
//     val: -1,
//     left: {
//       val: 5,
//       left: { val: 4, left: null, right: null },
//       right: {
//         val: 4,
//         left: {
//           val: -4,
//           left: {
//             val: 0,
//             left: { val: 3, left: null, right: null },
//             right: null,
//           },
//           right: null,
//         },
//         right: null,
//       },
//     },
//     right: {
//       val: -2,
//       left: {
//         val: 2,
//         left: {
//           val: -2,
//           left: { val: -1, left: null, right: null },
//           right: null,
//         },
//         right: {
//           val: 3,
//           left: { val: -3, left: null, right: null },
//           right: null,
//         },
//       },
//       right: {
//         val: -2,
//         left: null,
//         right: {
//           val: -2,
//           left: { val: -4, left: null, right: null },
//           right: {
//             val: -3,
//             left: { val: 3, left: null, right: null },
//             right: { val: -3, left: null, right: null },
//           },
//         },
//       },
//     },
//   })
// )

// console.log(
//   goodNodes({
//     val: 3,
//     left: {
//       val: 3,
//       left: { val: 4, left: null, right: null },
//       right: { val: 2, left: null, right: null },
//     },
//     right: null,
//   })
// )

// console.log(
//   goodNodes({
//     val: 3,
//     left: { val: 1, left: { val: 3, left: null, right: null }, right: null },
//     right: {
//       val: 4,
//       left: { val: 1, left: null, right: null },
//       right: { val: 5, left: null, right: null },
//     },
//   })
// )
