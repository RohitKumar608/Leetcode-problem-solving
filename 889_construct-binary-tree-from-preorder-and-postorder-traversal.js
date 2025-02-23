/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var constructFromPrePost = function (preorder, postorder) {
  const postValToIndex = {}
  for (let i = 0; i < postorder.length; i++) {
    postValToIndex[postorder[i]] = i
  }
  function constructFromPrePostHelper(i1, i2, j1) {
    if (i1 > i2) {
      return null
    }
    const root = new TreeNode(preorder[i1])
    if (i1 === i2) {
      return root
    }
    const leftVal = preorder[i1 + 1]
    const mid = postValToIndex[leftVal]
    const leftSize = mid - j1 + 1
    root.left = constructFromPrePostHelper(i1 + 1, i1 + leftSize, j1)
    root.right = constructFromPrePostHelper(i1 + leftSize + 1, i2, mid + 1)
    return root
  }

  return constructFromPrePostHelper(0, preorder.length - 1, 0)
}

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]))
