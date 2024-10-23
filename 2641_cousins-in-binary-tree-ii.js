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
var replaceValueInTree = function (root) {
  let stack = [root]
  let depth = 0
  const map = {}
  while (stack.length) {
    const len = stack.length
    const tempValues = []
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      tempValues.push(node?.val || null)
      if (node) stack.push(node.left)
      if (node) stack.push(node.right)
    }
    depth++
    if (tempValues.length > 2) {
      const totalSum = tempValues.reduce((sum, val) => sum + val || 0, 0)
      const newSum = []
      for (let i = 0; i < tempValues.length; i = i + 2) {
        const siblingSum =
          totalSum - (tempValues[i] || 0) - (tempValues[i + 1] || 0)
        newSum[i] = tempValues[i] === null ? tempValues[i] : siblingSum
        newSum[i + 1] =
          tempValues[i + 1] === null ? tempValues[i + 1] : siblingSum
      }
      map[depth] = newSum
    } else {
      map[depth] = tempValues.map((val) => 0)
    }
  }
  stack = [root]
  depth = 1
  while (stack.length) {
    const len = stack.length
    const siblingsValues = map[depth]
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      if (node) node.val = siblingsValues[i]
      if (node) stack.push(node.left)
      if (node) stack.push(node.right)
    }
    depth++
  }
  return root
}

function replaceValueInTree(root) {
  root.val = 0
  let queue = [root]

  while (queue.length !== 0) {
    let sumInLevel = 0
    let countNodesInLevel = queue.length
    let tempQueue = []
    for (let i = 0; i < countNodesInLevel; i++) {
      let node = queue[i]

      if (node.left !== null) {
        sumInLevel += node.left.val
        tempQueue.push(node.left)
      }
      if (node.right !== null) {
        sumInLevel += node.right.val
        tempQueue.push(node.right)
      }
    }

    for (let i = 0; i < countNodesInLevel; i++) {
      let node = queue[i]
      let sumOfTwoNodes =
        (node.left !== null ? node.left.val : 0) +
        (node.right !== null ? node.right.val : 0)

      if (node.left !== null) node.left.val = sumInLevel - sumOfTwoNodes
      if (node.right !== null) node.right.val = sumInLevel - sumOfTwoNodes
    }
    queue = tempQueue
  }

  return root
}

console.log(
  replaceValueInTree({
    val: 5,
    left: {
      val: 4,
      left: { val: 1, left: null, right: null },
      right: { val: 10, left: null, right: null },
    },
    right: { val: 9, left: null, right: { val: 7, left: null, right: null } },
  })
)
