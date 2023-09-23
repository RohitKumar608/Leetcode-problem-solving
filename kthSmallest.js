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

// var kthSmallest = function (root, k) {
//   const arr = []
//   traverse(root, arr)
//   arr.sort((a, b) => a - b)
//   return arr[k - 1]
// }

var kthSmallest = function (root, k) {
  let stack = []
  let result = []
  let current_Node = root
  if (root === null) return undefined
  while (current_Node !== null || stack.length > 0) {
    while (current_Node != null) {
      stack.push(current_Node)
      current_Node = current_Node.left
    }
    current_Node = stack.pop()
    if (current_Node) result.push(current_Node.val)
    if (current_Node) current_Node = current_Node.right
    if (result.length === k) return result[k - 1]
  }

  return result[k - 1]
}

var kthSmallest = function (root, k) {
  let result = null
  const preOrderSort = (root) => {
    if (root === null) return
    if (root.left) preOrderSort(root.left)
    k--
    if (k === 0) result = root.val
    if (root.right) preOrderSort(root.right)
  }
  preOrderSort(root)

  return result
}

console.log(kthSmallest(tree.root, 3))
