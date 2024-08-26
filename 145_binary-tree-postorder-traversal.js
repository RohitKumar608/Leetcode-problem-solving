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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let result = []
  const postOrderTraversal = (root) => {
    if (root === null) return
    if (root.left) postOrderTraversal(root.left)
    if (root.right) postOrderTraversal(root.right)
    result.push(root.val)
  }
  postOrderTraversal(root)
  return result
}
