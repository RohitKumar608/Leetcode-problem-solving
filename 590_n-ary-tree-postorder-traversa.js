/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  const result = []
  function dfs(root) {
    if (root == null) return
    if (root?.children.length === 0) {
      result.push(root.val)
      return
    }
    root.children.forEach((child) => {
      dfs(child)
    })
    result.push(root.val)
  }
  dfs(root)
  return result
}

console.log(
  postorder({
    val: 1,
    children: [
      {
        val: 3,
        children: [
          { val: 5, children: [] },
          { val: 6, children: [] },
        ],
      },
      { val: 2, children: [] },
      { val: 4, children: [] },
    ],
  })
)
