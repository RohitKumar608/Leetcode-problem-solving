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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = []
  function traverse(root, arr = [], sum = 0) {
    if (root === null) return
    if (root?.left === null && root.right === null) {
      if (sum + root.val === targetSum) {
        const updateData = arr.concat(root.val)
        result.push(updateData)
      }
      return
    }
    const updateData = arr.concat(root.val)
    sum = sum + root.val
    if (root?.left) traverse(root.left, updateData, sum)
    if (root?.right) traverse(root.right, updateData, sum)
  }
  traverse(root, [], 0)
  return result
}

console.log(
  pathSum(
    {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: { val: 7, left: null, right: null },
          right: { val: 2, left: null, right: null },
        },
        right: null,
      },
      right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
          val: 4,
          left: { val: 5, left: null, right: null },
          right: { val: 1, left: null, right: null },
        },
      },
    },
    22
  )
)
