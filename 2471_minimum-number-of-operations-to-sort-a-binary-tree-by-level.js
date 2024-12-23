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

function selectionSortWithSwapCount(arr) {
  let swapCount = 0

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    // Find the index of the minimum element in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    // Swap if the minimum element is not in its correct position
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
      swapCount++
    }
  }

  return { sortedArray: arr, swapCount: swapCount }
}

var minimumOperations = function (root) {
  const map = {}
  let result = 0
  function dfs(node, level) {
    if (node === null) return
    if (map[level] === undefined) map[level] = []
    map[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 0)
  for (const key in map) {
    result += selectionSortWithSwapCount(map[key]).swapCount
  }

  return result
}

var minimumOperations = function (root) {
  const map = {}
  let result = 0
  function dfs(node, level) {
    if (node === null) return
    if (map[level] === undefined) map[level] = []
    map[level].push([node.val, map[level].length])
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 0)
  for (const key in map) {
    const sortedData = [...map[key]].sort((a, b) => a[0] - b[0])
    for (let i = 0; i < sortedData.length; i++) {
      const temp = map[key][i]
      if (sortedData[i][0] !== temp[0]) {
        map[key][i] = sortedData[i]
        temp[1] = sortedData[i][1]
        map[key][sortedData[i][1]] = temp
        result++
      }
    }
  }

  return result
}

// console.log(
//   minimumOperations({
//     val: 49,
//     left: {
//       val: 45,
//       left: {
//         val: 20,
//         left: { val: 27, left: null, right: null },
//         right: null,
//       },
//       right: { val: 46, left: null, right: null },
//     },
//     right: {
//       val: 1,
//       left: {
//         val: 15,
//         left: { val: 25, left: null, right: null },
//         right: null,
//       },
//       right: { val: 39, left: null, right: null },
//     },
//   })
// )

// console.log(
//   minimumOperations({
//     val: 11,
//     left: {
//       val: 3,
//       left: { val: 27, left: null, right: null },
//       right: {
//         val: 29,
//         left: { val: 18, left: null, right: null },
//         right: null,
//       },
//     },
//     right: { val: 43, left: null, right: { val: 17, left: null, right: null } },
//   })
// )

// console.log(
//   minimumOperations({
//     val: 1,
//     left: {
//       val: 3,
//       left: { val: 7, left: null, right: null },
//       right: { val: 6, left: null, right: null },
//     },
//     right: {
//       val: 2,
//       left: { val: 5, left: null, right: null },
//       right: { val: 4, left: null, right: null },
//     },
//   })
// )

console.log(
  minimumOperations({
    val: 1,
    left: {
      val: 4,
      left: { val: 7, left: null, right: null },
      right: { val: 6, left: null, right: null },
    },
    right: {
      val: 3,
      left: { val: 8, left: { val: 9, left: null, right: null }, right: null },
      right: {
        val: 5,
        left: { val: 10, left: null, right: null },
        right: null,
      },
    },
  })
)

// console.log(
//   minimumOperations({
//     val: 1,
//     left: {
//       val: 2,
//       left: { val: 4, left: null, right: null },
//       right: { val: 5, left: null, right: null },
//     },
//     right: { val: 3, left: { val: 6, left: null, right: null }, right: null },
//   })
// )

// console.log(
//   minimumOperations({
//     val: 28,
//     left: { val: 13, left: { val: 32, left: null, right: null }, right: null },
//     right: {
//       val: 40,
//       left: {
//         val: 20,
//         left: {
//           val: 49,
//           left: {
//             val: 41,
//             left: { val: 9, left: null, right: null },
//             right: null,
//           },
//           right: null,
//         },
//         right: { val: 29, left: null, right: null },
//       },
//       right: null,
//     },
//   })
// )
