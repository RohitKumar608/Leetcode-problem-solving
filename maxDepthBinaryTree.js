// https://leetcode.com/problems/maximum-depth-of-binary-tree
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

var maxDepth = function (root) {
  if (root === null) return 0
  const travserse = (root) => {
    if (root === null) return 0
    return 1 + Math.max(travserse(root.left), travserse(root.right))
  }
  const data = travserse(root)

  return data
}

var maxDepth = function (root) {
  if (root === null) return 0
  let depth = 0
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const root = queue.shift()
      if (root?.left) {
        queue.push(root.left)
      }
      if (root?.right) {
        queue.push(root.right)
      }
    }
    depth++
  }
  return depth
}
