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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var balanceBST = function (root) {
  const nodes = []
  function dfs(root) {
    if (root === null) return

    dfs(root.left)
    nodes.push(root.val)

    dfs(root.right)
  }
  dfs(root)

  function buildTree(nodes) {
    if (nodes.length === 0) return null
    const mid = Math.floor((nodes.length - 1) / 2)
    const node = new TreeNode(nodes[mid])
    node.left = buildTree(nodes.slice(0, mid))
    node.right = buildTree(nodes.slice(mid + 1))
    return node
  }
  return buildTree(nodes)
}

// console.log(
//   balanceBST({
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: null,
//       right: { val: 3, left: null, right: { val: 4, left: null, right: null } },
//     },
//   })
// )

// console.log(
//   balanceBST({
//     val: 2,
//     left: { val: 1, left: null, right: null },
//     right: { val: 3, left: null, right: null },
//   })
// )

console.log(
  balanceBST({
    val: 1,
    left: null,
    right: {
      val: 15,
      left: {
        val: 14,
        left: {
          val: 7,
          left: {
            val: 2,
            left: null,
            right: { val: 3, left: null, right: null },
          },
          right: {
            val: 12,
            left: {
              val: 9,
              left: null,
              right: { val: 11, left: null, right: null },
            },
            right: null,
          },
        },
        right: null,
      },
      right: { val: 17, left: null, right: null },
    },
  })
)
