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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const sum = []
  const stack = [root]
  while (stack.length > 0) {
    const len = stack.length
    let tempSum = 0
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      if (node?.left) stack.push(node.left)
      if (node?.right) stack.push(node.right)
      tempSum += node.val || 0
    }
    sum.push(tempSum)
  }
  sum.sort((a, b) => b - a)
  return sum[k - 1] || -1
}

var kthLargestLevelSum = function (root, k) {
  let sumLevel = []
  let level = 0
  sum(sumLevel, root, level)
  sumLevel.sort((a, b) => (a > b ? -1 : 0))
  let result = sumLevel[--k]
  return result ? result : -1
}

function sum(sumLevel, root, level) {
  if (sumLevel[level] === undefined) {
    sumLevel[level] = 0
  }
  let val = root.val
  sumLevel[level] += val
  if (root.left) {
    sum(sumLevel, root.left, level + 1)
  }
  if (root.right) {
    sum(sumLevel, root.right, level + 1)
  }
}

console.log(
  kthLargestLevelSum(
    {
      val: 5,
      left: {
        val: 8,
        left: {
          val: 2,
          left: { val: 4, left: null, right: null },
          right: { val: 6, left: null, right: null },
        },
        right: { val: 1, left: null, right: null },
      },
      right: {
        val: 9,
        left: { val: 3, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    },
    2
  )
)
