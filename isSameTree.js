// https://leetcode.com/problems/same-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const traverse = (p, q) => {
    if (p === null || q === null) return p === q
    if (p.val !== q.val) return false
    return traverse(p.left, q.left) && traverse(p.right, q.right)
  }

  return traverse(p, q)
}

var isSameTree = function (p, q) {
  if (p?.val !== q?.val) return false
  let stack = [p, q]
  while (stack.length) {
    const firstTreeNode = stack.pop()
    const secondTreeNode = stack.pop()
    if (firstTreeNode === null && secondTreeNode === null) continue
    if (
      (secondTreeNode === null && firstTreeNode !== null) ||
      (secondTreeNode !== null && firstTreeNode === null)
    ) {
      return false
    }
    if (firstTreeNode?.val !== secondTreeNode?.val) {
      return false
    }
    stack.push(firstTreeNode.left)
    stack.push(secondTreeNode.left)
    stack.push(firstTreeNode.right)
    stack.push(secondTreeNode.right)
  }
  return true
}

console.log(
  isSameTree(
    { val: 0, left: { val: -5, left: null, right: null }, right: null },
    { val: 0, left: { val: -8, left: null, right: null }, right: null }
  )
)

console.log(
  isSameTree(
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    }
  )
)

console.log(
  isSameTree(
    { val: 1, left: { val: 2, left: null, right: null }, right: null },
    { val: 1, left: null, right: { val: 2, left: null, right: null } }
  )
)

console.log(
  isSameTree(
    { val: 1, left: { val: 2, left: null, right: null }, right: null },
    { val: 1, left: null, right: { val: 2, left: null, right: null } }
  )
)
