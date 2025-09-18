/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  const values = []
  function dfs(root) {
    if (root == null) {
      return
    }
    values.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root1)
  dfs(root2)
  values.sort((a, b) => a - b)
  return values
}
