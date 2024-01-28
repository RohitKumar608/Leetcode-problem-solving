// https://leetcode.com/problems/flatten-binary-tree-to-linked-list

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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
  if (root === null) return root
  if (root.left === null && root.right === null) return root
  let head = root
  let tail = head
  function traverse(root) {
    if (root === null) return
    const left = root.left
    const right = root.right
    root.left = null
    root.right = null
    tail.right = root
    tail = root
    traverse(left)
    traverse(right)
  }
  traverse(root)
  return head.right
}
