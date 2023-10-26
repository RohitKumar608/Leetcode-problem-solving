// https://leetcode.com/problems/binary-tree-level-order-traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  const stack = [root]
  while (stack.length) {
    const temRes = []
    const length = stack.length
    for (let i = 0; i < length; i++) {
      const node = stack.shift()
      if (node?.left) stack.push(node.left)
      if (node?.right) stack.push(node.right)
      temRes.push(node.val)
    }
    result.push(temRes)
  }
  return result
}

console.log(
  levelOrder({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  })
)
