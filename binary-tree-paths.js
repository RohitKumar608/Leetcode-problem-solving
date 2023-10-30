// https://leetcode.com/problems/binary-tree-paths

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = []
  function traverse(root, path = '') {
    if (root === null) return
    if (root.left === null && root.right === null) {
      if (path.length) {
        result.push(`${path}->${root.val}`)
      } else {
        result.push(`${root.val}`)
      }
    }
    let value = ''
    if (path === '') {
      value = `${root.val}`
    } else {
      value = `${path}->${root.val}`
    }
    if (root?.left) traverse(root.left, value)
    if (root?.right) traverse(root.right, value)
  }
  traverse(root)
  return result
}
