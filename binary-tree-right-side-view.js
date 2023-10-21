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
  while (stack.length) {
    const length = stack.length
    for (let i = 0; i < length; i++) {
      const node = stack.shift()
      if (node?.right) stack.push(node.right)
      if (node?.left && !node?.right?.right) stack.push(node.left?.left)
      if (node?.val) result.push(node.val)
    }
  }

  return result
}

console.log(
  rightSideView({
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: {
        val: 5,
        left: {
          val: 4,
          left: { val: 3, left: null, right: null },
          right: null,
        },
        right: { val: 6, left: null, right: null },
      },
    },
  })
)
