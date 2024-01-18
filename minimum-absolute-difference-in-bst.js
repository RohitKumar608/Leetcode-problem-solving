// https://leetcode.com/problems/minimum-absolute-difference-in-bst
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

var getMinimumDifference = function (root) {
  let totalmin = Infinity
  let prev = Infinity
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    totalmin = Math.min(totalmin, Math.abs(node.val - prev))
    prev = node.val
    traverse(node.right)
  }
  traverse(root)
  return totalmin
}
