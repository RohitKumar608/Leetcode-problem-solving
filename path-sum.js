// https://leetcode.com/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let result = false
  function traverse(root, sum) {
    if (root === null) return 0
    if (root?.left === null && root.right === null) {
      result = result || root.val + sum === targetSum
    }

    if (root?.left) traverse(root.left, sum + root.val)
    if (root?.right) traverse(root.right, sum + root.val)
  }
  traverse(root, 0)
  return result
}
