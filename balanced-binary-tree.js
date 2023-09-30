// https://leetcode.com/problems/balanced-binary-tree/

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
var isBalanced1 = function (root) {
  if (root === null) return true
  let result = true
  const getHeight = (root) => {
    if (root === null) return 0
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
  }
  function traverse(root) {
    if (root === null) return 0
    const left = getHeight(root.left)
    traverse(root.left)
    const right = getHeight(root.right)
    traverse(root.right)
    if (Math.abs(left - right) > 1) {
      result = false
    }
  }
  traverse(root)
  return result
}

const data = {
  val: 2,
  left: {
    val: 1,
    left: { val: 0, left: { val: 2, left: null, right: null }, right: null },
    right: {
      val: 7,
      left: { val: 1, left: null, right: null },
      right: { val: 0, left: { val: 7, left: null, right: null }, right: null },
    },
  },
  right: {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 1,
      left: { val: 8, left: null, right: null },
      right: { val: 8, left: null, right: null },
    },
  },
}

console.log(isBalanced(data))
