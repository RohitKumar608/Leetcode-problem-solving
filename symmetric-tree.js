// https://leetcode.com/problems/symmetric-tree

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const traverse = (p, q) => {
    if (p === null || q === null) return p === q
    if (p.val !== q.val) return false
    return traverse(p.left, q.right) && traverse(p.right, q.left)
  }

  return traverse(root.left, root.right)
}
