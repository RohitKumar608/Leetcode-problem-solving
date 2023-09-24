// https://leetcode.com/problems/find-mode-in-binary-search-tree/

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
 * @return {number[]}
 */
var findMode = function (root) {
  let map = {}
  let maxOccurCount = 0
  const inOrderTraversal = (root) => {
    if (root === null) return
    if (root.left) inOrderTraversal(root.left)
    map[root.val] = (map[root.val] || 0) + 1

    if (maxOccurCount < map[root.val]) {
      maxOccurCount = map[root.val]
      maxOccurEle = root.val
    }
    if (root.right) inOrderTraversal(root.right)
  }
  inOrderTraversal(root)

  const result = []
  for (const key in map) {
    if (map[key] === maxOccurCount) {
      result.push(+key)
    }
  }
  return result
}
