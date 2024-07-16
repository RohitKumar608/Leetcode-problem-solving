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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */

var getDirections = function (root, startValue, destValue) {
  function dfs(root, path, target) {
    if (root === null) return ''
    if (root.val === target) return path

    path.push('L')
    let res = ''
    res = dfs(root.left, path, target)
    if (res) return res
    path.pop()
    path.push('R')
    res = dfs(root.right, path, target)
    if (res) return res
    path.pop()
    return ''
  }
  const leftPath = dfs(root, [], startValue)
  const rightPath = dfs(root, [], destValue)
  let i = 0
  while (i < Math.min(leftPath.length, rightPath.length)) {
    if (leftPath[i] !== rightPath[i]) {
      break
    }
    i++
  }
  return 'U'.repeat(leftPath.slice(i).length) + rightPath.slice(i).join('')
}

console.log(
  getDirections(
    {
      val: 5,
      left: { val: 1, left: { val: 3, left: null, right: null }, right: null },
      right: {
        val: 2,
        left: { val: 6, left: null, right: null },
        right: { val: 4, left: null, right: null },
      },
    },
    3,
    6
  )
)

console.log(
  getDirections(
    { val: 2, left: { val: 1, left: null, right: null }, right: null },
    2,
    1
  )
)
