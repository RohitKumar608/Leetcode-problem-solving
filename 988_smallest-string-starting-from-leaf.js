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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  const strings = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const traverseStr = []
  function dfs(root, str) {
    if (root === null) {
      return
    }
    if (root.left === null && root.right === null) {
      traverseStr.push((str + strings[root.val]).split('').reverse().join(''))
    }
    str += strings[root.val]
    if (root?.left) dfs(root.left, str)
    if (root?.right) dfs(root.right, str)
  }
  dfs(root, '')
  return traverseStr.sort((a, b) => a.localeCompare(b))[0]
}

console.log(
  smallestFromLeaf({
    val: 0,
    left: {
      val: 1,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
  })
)

console.log(
  smallestFromLeaf({
    val: 25,
    left: {
      val: 1,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 3,
      left: { val: 0, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
  })
)

console.log(
  smallestFromLeaf({
    val: 2,
    left: {
      val: 2,
      left: null,
      right: { val: 1, left: { val: 0, left: null, right: null }, right: null },
    },
    right: { val: 1, left: { val: 0, left: null, right: null }, right: null },
  })
)
