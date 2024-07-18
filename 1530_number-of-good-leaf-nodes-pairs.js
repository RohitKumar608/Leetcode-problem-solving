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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let result = 0
  function dfs(root) {
    if (root === null) return []
    if (root.left === null && root.right === null) {
      return [1]
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    for (let i = 0; i < left.length; i++) {
      for (let j = 0; j < right.length; j++) {
        if (left[i] + right[j] <= distance) {
          result++
        }
      }
    }
    const allNodesDis = left.concat(right)
    return allNodesDis.map((val) => val + 1)
  }
  dfs(root, 0)
  return result
}

console.log(
  countPairs(
    {
      val: 1,
      left: { val: 2, left: null, right: { val: 4, left: null, right: null } },
      right: { val: 3, left: null, right: null },
    },
    3
  )
)

// console.log(
//   countPairs(
//     {
//       val: 1,
//       left: {
//         val: 2,
//         left: { val: 4, left: null, right: null },
//         right: { val: 5, left: null, right: null },
//       },
//       right: {
//         val: 3,
//         left: { val: 6, left: null, right: null },
//         right: { val: 7, left: null, right: null },
//       },
//     },
//     3
//   )
// )

// console.log(
//   countPairs(
//     {
//       val: 7,
//       left: { val: 1, left: { val: 6, left: null, right: null }, right: null },
//       right: {
//         val: 4,
//         left: { val: 5, left: null, right: null },
//         right: {
//           val: 3,
//           left: null,
//           right: { val: 2, left: null, right: null },
//         },
//       },
//     },
//     3
//   )
// )
