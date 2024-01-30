// https://leetcode.com/problems/invert-binary-tree

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return root
  const traverse = (p) => {
    if (p === null) return
    if (p.left === null && p.right === null) return
    const tem = p.left
    p.left = p.right
    p.right = tem
    traverse(p.left)
    traverse(p.right)
  }

  traverse(root)
  return root
}
