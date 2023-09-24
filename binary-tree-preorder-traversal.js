// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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
var preorderTraversal = function (root) {
  let result = []
  const preOrderTraversal = (root) => {
    if (root === null) return
    result.push(root.val)
    if (root.left) preOrderTraversal(root.left)
    if (root.right) preOrderTraversal(root.right)
  }
  preOrderTraversal(root)
  return result
}
