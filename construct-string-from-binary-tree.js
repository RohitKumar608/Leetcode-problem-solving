// https://leetcode.com/problems/construct-string-from-binary-tree

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
 * @return {string}
 */
var tree2str = function (root) {
  let result = []
  function preOrder(root) {
    if (root === null) return
    result.push('(')
    result.push(root.val)
    if (root?.left === null && root?.right) {
      result.push('()')
    }
    preOrder(root?.left)
    preOrder(root?.right)
    result.push(')')
  }
  preOrder(root)
  result.shift()
  result.pop()
  return result.join('')
}

console.log(
  tree2str({
    val: 1,
    left: { val: 2, left: null, right: { val: 4, left: null, right: null } },
    right: { val: 3, left: null, right: null },
  })
)

console.log(
  tree2str({
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: { val: 3, left: null, right: null },
  })
)

console.log(
  tree2str({
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: null,
  })
)

// console.log(JSON.parse(JSON.stringify(root)));
