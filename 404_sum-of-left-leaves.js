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
var sumOfLeftLeaves = function (root) {
  let result = 0
  function dfs(root, childOf) {
    if (root === null) {
      return
    }
    if (childOf === 'L' && root.left === null && root.right == null) {
      result += root.val
    }
    dfs(root.left, 'L')
    dfs(root.right)
  }
  dfs(root)
  return result
}
