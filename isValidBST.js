// https://leetcode.com/problems/validate-binary-search-tree/

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
var isValidBST = function (root) {
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
  }
  let isValidTree = true
  for (let i = 1; i < result.length; i++) {
    isValidTree = isValidTree && result[i] > result[i - 1]
    if (!isValidTree) return false
  }
  return true
}
