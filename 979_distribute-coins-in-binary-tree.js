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
var distributeCoins = function (root) {
  let noOMoves = 0
  function dfs(root) {
    if (root === null) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    noOMoves += Math.abs(left) + Math.abs(right)
    return root.val + left + right - 1
  }
  dfs(root)
  return noOMoves
}

console.log(
  distributeCoins({
    val: 1,
    left: { val: 0, left: null, right: { val: 3, left: null, right: null } },
    right: { val: 0, left: null, right: null },
  })
)

// console.log(
//   distributeCoins({
//     val: 0,
//     left: { val: 3, left: null, right: null },
//     right: { val: 0, left: null, right: null },
//   })
// )

// console.log(
//   distributeCoins({
//     val: 3,
//     left: { val: 0, left: null, right: null },
//     right: { val: 0, left: null, right: null },
//   })
// )

// console.log(
//   distributeCoins({
//     val: 1,
//     left: { val: 0, left: null, right: null },
//     right: { val: 2, left: null, right: null },
//   })
// )
