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
var pruneTree = function (root) {
  function helper(root) {
    if (root === null) {
      return 0
    }

    const leftSum = helper(root.left)
    if (leftSum === 0) {
      root.left = null
    }
    const rightSum = helper(root.right)
    if (rightSum === 0) {
      root.right = null
    }
    return leftSum + rightSum + root.val
  }
  const sum = helper(root)
  if (sum == 0) {
    return null
  }
  return root
}

console.log(
  pruneTree({
    val: 1,
    left: null,
    right: {
      val: 0,
      left: { val: 0, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
  })
)
