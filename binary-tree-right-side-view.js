// https://leetcode.com/problems/binary-tree-right-side-view
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  console.log(JSON.stringify(root))
  const result = []
  const stack = [root]
  const secondStack = []
  let count = 0
  while (stack.length) {
    const length = stack.length
    for (let i = 0; i < length; i++) {
      const node = stack.shift()
      if (node?.left) secondStack.push(node.left)
      if (node?.right) stack.push(node.right)
      if (node?.val) result.push(node.val)
    }
    count++
  }
  let dupCount = 1
  while (secondStack.length) {
    const length = secondStack.length
    for (let i = 0; i < length; i++) {
      const node = secondStack.shift()
      if (node?.left) secondStack.push(node.left)
      if (dupCount >= count) {
        if (node?.val) result.push(node.val)
      }
    }
    dupCount++
  }

  return result
}

console.log(
  rightSideView({
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: { val: 3, left: null, right: null },
  })
)

console.log(
  rightSideView({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  })
)
