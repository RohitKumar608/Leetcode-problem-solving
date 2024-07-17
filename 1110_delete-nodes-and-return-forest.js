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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const deletedNode = new Set(to_delete)
  const result = [root]
  function dfs(root) {
    if (root === null) return null
    if (deletedNode.has(root.val)) {
      result.push(root.left)
      result.push(root.right)
      dfs(root.left)
      dfs(root.right)
      root.left = null
      root.left = null
    }
    if (deletedNode.has(root.left?.val)) {
      result.push(root.left.left)
      result.push(root.left.right)
      dfs(root.left.left)
      dfs(root.left.right)
      root.left = null
    }
    if (deletedNode.has(root.right?.val)) {
      result.push(root.right.left)
      result.push(root.right.right)
      dfs(root.right.left)
      dfs(root.right.right)
      root.right = null
    }
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  const res = []
  let cache = {}
  for (const root of result) {
    if (root === null || deletedNode.has(root?.val) || cache[root?.val]) {
      continue
    }
    res.push(root)
    cache[root.val] = true
  }
  return res
}
var delNodes = function (root, to_delete) {
  to_delete = new Set(to_delete)
  const result = new Set([root])
  function dfs(root) {
    if (root === null) return null
    let res = root
    if (to_delete.has(root.val)) {
      res = null
      result.delete(root)
      if (root.left) result.add(root.left)
      if (root.right) result.add(root.right)
    }
    root.left = dfs(root.left)
    root.right = dfs(root.right)
    return res
  }
  dfs(root)
  return [...result.values()]
}

console.log(
  delNodes(
    {
      val: 1,
      left: { val: 4, left: null, right: null },
      right: {
        val: 2,
        left: null,
        right: {
          val: 3,
          left: {
            val: 6,
            left: null,
            right: { val: 7, left: null, right: null },
          },
          right: { val: 5, left: null, right: null },
        },
      },
    },
    [2, 1, 7]
  )
)
