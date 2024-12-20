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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  const values = []
  function dfs(root, level) {
    if (root === null) {
      return
    }
    values[level] = (values[level] || []).concat(root.val)
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
  dfs(root, 0)
  function dfs1(root, level) {
    if (root === null) {
      return
    }
    if (level % 2 !== 0) root.val = values[level].pop()
    dfs1(root.left, level + 1)
    dfs1(root.right, level + 1)
  }
  dfs1(root, 0)
  return root
}

var reverseOddLevels = function (root) {
  traverse(root.left, root.right, 1)

  return root
}

function traverse(node1, node2, level) {
  if (node1 == null) return

  if (level % 2 == 1) {
    swap(node1, node2)
  }

  traverse(node1.left, node2.right, level + 1)
  traverse(node1.right, node2.left, level + 1)
}

function swap(node1, node2) {
  let temp = node1.val
  node1.val = node2.val
  node2.val = temp
}

console.log(
  reverseOddLevels({
    val: 2,
    left: {
      val: 3,
      left: { val: 8, left: null, right: null },
      right: { val: 13, left: null, right: null },
    },
    right: {
      val: 5,
      left: { val: 21, left: null, right: null },
      right: { val: 34, left: null, right: null },
    },
  })
)
