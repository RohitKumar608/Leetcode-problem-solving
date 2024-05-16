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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  let result = ''
  function dfs(root, values = []) {
    if (root === null) {
      return false
    }
    dfs(root.left, values)
    dfs(root.right, values)
    if (root.val <= 1) {
      values.push(root.val)
    } else {
      const f1Val = values.pop()
      const f2Val = values.pop()
      result = root.val === 2 ? f1Val || f2Val : f1Val && f2Val
      values.push(result)
    }
  }

  dfs(root)
  return !!result
}

console.log(
  evaluateTree({
    val: 2,
    left: { val: 1, left: null, right: null },
    right: {
      val: 3,
      left: { val: 0, left: null, right: null },
      right: { val: 1, left: null, right: null },
    },
  })
)

console.log(
  evaluateTree({
    val: 3,
    left: {
      val: 3,
      left: { val: 0, left: null, right: null },
      right: { val: 0, left: null, right: null },
    },
    right: {
      val: 2,
      left: {
        val: 3,
        left: { val: 1, left: null, right: null },
        right: {
          val: 3,
          left: {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 1, left: null, right: null },
          },
          right: { val: 1, left: null, right: null },
        },
      },
      right: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    },
  })
)
