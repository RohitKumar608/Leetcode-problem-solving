/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  function dfs(root1, root2) {
    if (root1 == null && root2 == null) {
      return true
    }

    if (root1 == null || root2 == null) {
      return false
    }
    if (root1.val !== root2.val) {
      return false
    }
    let result = true
    if (
      root1.left?.val === root2.right?.val ||
      root1.right?.val === root2.left?.val
    ) {
      result =
        result && dfs(root1.left, root2.right) && dfs(root1.right, root2.left)
    } else {
      result =
        result && dfs(root1.left, root2.left) && dfs(root1.right, root2.right)
    }
    return result
  }
  return dfs(root1, root2)
}

console.log(
  flipEquiv(
    {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
          val: 5,
          left: { val: 7, left: null, right: null },
          right: { val: 8, left: null, right: null },
        },
      },
      right: { val: 3, left: { val: 6, left: null, right: null }, right: null },
    },
    {
      val: 1,
      left: { val: 3, left: null, right: { val: 6, left: null, right: null } },
      right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
          val: 5,
          left: { val: 8, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
      },
    }
  )
)
console.log(
  flipEquiv(
    {
      val: 0,
      left: { val: 3, left: null, right: null },
      right: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    },
    {
      val: 0,
      left: { val: 3, left: null, right: null },
      right: { val: 1, left: null, right: { val: 2, left: null, right: null } },
    }
  )
)
