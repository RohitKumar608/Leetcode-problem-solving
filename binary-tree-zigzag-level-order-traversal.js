//  https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
var zigzagLevelOrder = function (root) {
  let count = 0
  if (root === null) return []
  const result = []
  const stack = [root]
  while (stack.length) {
    const temRes = []
    const length = stack.length
    for (let i = 0; i < length; i++) {
      const node = stack.shift()
      temRes.push(node.val)
      if (node?.left) stack.push(node.left)

      if (node?.right) stack.push(node.right)
    }
    count++
    if (count % 2 === 0) {
      temRes.reverse()
    }
    result.push(temRes)
  }
  return result
}

console.log(
  zigzagLevelOrder({
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
  })
)
