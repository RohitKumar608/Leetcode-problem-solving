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
 * @return {number}
 */

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
 * @return {number}
 */
var sumNumbers = function (root) {
  let result = 0
  function traverse(root, value) {
    if (root === null) {
      return value
    }
    if (root.left === null && root.right === null) {
      result += +(value + root.val)
    }
    const updatedVal = value + root.val
    traverse(root?.left, updatedVal)
    traverse(root?.right, updatedVal)
  }
  traverse(root, '')
  return result
}

console.log(
  sumNumbers({
    val: 4,
    left: { val: 9, left: null, right: { val: 1, left: null, right: null } },
    right: { val: 0, left: null, right: null },
  })
)
