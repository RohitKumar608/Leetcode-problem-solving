// https://leetcode.com/problems/kth-smallest-element-in-a-bst

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
 * @param {number} k
 * @return {number}
 */

function traverse(root, arr) {
  if (root === null) return
  arr.push(root.val)
  if (root.left) {
    traverse(root.left, arr)
  }
  if (root.right) {
    traverse(root.right, arr)
  }
}

var kthSmallest = function (root, k) {
  const arr = []
  traverse(root, arr)
  arr.sort((a, b) => a - b)
  return arr[k - 1]
}
