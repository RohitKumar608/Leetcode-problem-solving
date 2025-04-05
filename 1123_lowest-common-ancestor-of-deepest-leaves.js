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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  let maxLevel = 0
  const map = {}
  function dfs(root, level) {
    if (root == null) {
      return level
    }

    const leftDepth = dfs(root.left, level + 1)
    const rightDepth = dfs(root.right, level + 1)
    if (leftDepth === rightDepth) {
      maxLevel = Math.max(maxLevel, leftDepth)
      map[leftDepth] = root
    }
    return Math.max(leftDepth, rightDepth)
  }
  dfs(root, 0)
  return map[maxLevel]
}

// console.log(
//   lcaDeepestLeaves({
//     val: 1,
//     left: {
//       val: 2,
//       left: { val: 3, left: null, right: { val: 6, left: null, right: null } },
//       right: { val: 4, left: null, right: { val: 5, left: null, right: null } },
//     },
//     right: null,
//   })
// )

console.log(
  lcaDeepestLeaves({
    val: 3,
    left: {
      val: 5,
      left: { val: 6, left: null, right: null },
      right: {
        val: 2,
        left: { val: 7, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
    },
    right: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 8, left: null, right: null },
    },
  })
)
