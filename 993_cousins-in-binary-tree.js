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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const stack = [root]
  while (stack.length) {
    const len = stack.length
    const map = {}
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      map[node.val] = true
      if (node?.left) stack.push(node.left)
      if (node?.right) stack.push(node.right)
      if (node?.left && root.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.right.val === x && node.left.val === y)
        ) {
          return false
        }
      }
    }
    if (map[x] && map[y]) {
      return true
    }
  }
  return false
}
