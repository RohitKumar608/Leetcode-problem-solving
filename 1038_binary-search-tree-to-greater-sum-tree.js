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
var bstToGst = function (root) {
  let sum = 0
  function dfs(root) {
    if (root == null) return
    dfs(root.right)
    sum += root.val
    root.val = sum
    dfs(root.left)
  }
  dfs(root)
  return root
}

console.log(
  bstToGst({
    val: 4,
    left: {
      val: 1,
      left: { val: 0, left: null, right: null },
      right: { val: 2, left: null, right: { val: 3, left: null, right: null } },
    },
    right: {
      val: 6,
      left: { val: 5, left: null, right: null },
      right: { val: 7, left: null, right: { val: 8, left: null, right: null } },
    },
  })
)
