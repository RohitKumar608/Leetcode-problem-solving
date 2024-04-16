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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

var addOneRow = function (root, val, depth) {
  if (depth === 1) {
    const node = new TreeNode(val)
    node.left = root
    return node
  }
  const stack = [root]
  let currDepth = 1
  while (stack.length && currDepth < depth - 1) {
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      if (node) {
        stack.push(node?.left || null)
        stack.push(node?.right || null)
      }
    }
    currDepth++
    console.log(currDepth)
  }
  for (const treeNode of stack) {
    if (treeNode) {
      const node = new TreeNode(val)
      node.left = treeNode?.left
      treeNode.left = node
    }
    if (treeNode) {
      const node = new TreeNode(val)
      node.right = treeNode?.right
      treeNode.right = node
    }
  }
  return root
}

console.log(
  addOneRow(
    {
      val: 4,
      left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
      right: { val: 6, left: { val: 5, left: null, right: null }, right: null },
    },
    1,
    2
  )
)

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
