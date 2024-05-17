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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  function dfs(root, previousRoot) {
    console.log(previousRoot)
    if (root === null) {
      return
    }
    if (root?.left) {
      if (
        root.left.left === null &&
        root.left.right === null &&
        root.left.val === target
      ) {
        root.left = null
        dfs(previousRoot)
      } else {
        dfs(root.left, root)
      }
    }
    if (root?.right) {
      if (
        root.right.left === null &&
        root.right.right === null &&
        root.right.val === target
      ) {
        root.right = null
        dfs(previousRoot)
      } else {
        dfs(root.right, root)
      }
    }
  }
  dfs(root)
  return root
}

var removeLeafNodes = function (node, target) {
  if (node == null) {
    return null
  }

  node.left = removeLeafNodes(node.left, target)
  node.right = removeLeafNodes(node.right, target)

  if (node.val === target && node.left === null && node.right === null) {
    return null
  }

  return node
}

// console.log(
//   removeLeafNodes(
//     {
//       val: 1,
//       left: { val: 2, left: { val: 2, left: null, right: null }, right: null },
//       right: {
//         val: 3,
//         left: { val: 2, left: null, right: null },
//         right: { val: 4, left: null, right: null },
//       },
//     },
//     2
//   )
// )

console.log(
  removeLeafNodes(
    {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 2,
          left: { val: 2, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: null,
    },
    2
  )
)
