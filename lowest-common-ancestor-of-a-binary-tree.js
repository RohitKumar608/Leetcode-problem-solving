// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function traverse(root) {
    if (root === null) return null
    if (root.val === p.val || root.val === q.val) {
      return root
    }
    if (root?.left === null && root.right === null) return null
    let left = null
    let right = null

    if (root?.left) {
      left = traverse(root.left)
    }
    if (root?.right) {
      right = traverse(root.right)
    }
    if (right && left) {
      return root
    }
    return left === null ? right : left
  }
  const result = traverse(root, p, q)

  return result
}

console.log(
  lowestCommonAncestor(
    {
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
    },
    { val: 6, left: null, right: null },
    { val: 4, left: null, right: null }
  )
)
