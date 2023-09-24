// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function (root) {
  let result = []
  const inOrderTraversal = (root) => {
    if (root === null) return
    if (root.left) inOrderTraversal(root.left)
    result.push(root.val)
    if (root.right) inOrderTraversal(root.right)
  }
  inOrderTraversal(root)
  return result
}
