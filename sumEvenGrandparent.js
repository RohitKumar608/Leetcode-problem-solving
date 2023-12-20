// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

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
var sumEvenGrandparent1 = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 0
  let sum = 0
  function traverse(root, grandParent) {
    if (root?.left === null && root?.right === null) return
    else if (grandParent?.val % 2 === 0) {
      sum += (root?.left?.val || 0) + (root?.right?.val || 0)
    }
    if (root?.left) traverse(root.left, root)
    if (root?.right) traverse(root.right, root)
  }
  traverse(root)
  return sum
}

var sumEvenGrandparent = function (root) {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 0
  let sum = 0
  function traverse(root) {
    if (root === null) return

    if (root && root.val % 2 === 0 && (root.left || root.right)) {
      sum += (root?.left?.left?.val || 0) + (root?.right?.right?.val || 0)
      sum += (root?.left?.right?.val || 0) + (root?.right?.left?.val || 0)
    }
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return sum
}

const tree = {
  val: 6,
  left: {
    val: 7,
    left: { val: 2, left: { val: 9, left: null, right: null }, right: null },
    right: {
      val: 7,
      left: { val: 1, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
  },
  right: {
    val: 8,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: { val: 5, left: null, right: null } },
  },
}

console.log(sumEvenGrandparent(tree))
