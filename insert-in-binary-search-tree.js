/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
var sortedArrayToBST = function (nums) {
  let root = null
  function binarySearchTree(value) {
    const node = new TreeNode(value)
    if (root === null) {
      root = node
    } else {
      let tempRoot = root
      while (tempRoot) {
        if (tempRoot?.val > value) {
          if (tempRoot?.left === null) {
            tempRoot.left = node
            break
          }
          if (tempRoot) tempRoot = tempRoot.left
        } else {
          if (tempRoot?.right === null) {
            tempRoot.right = node
            break
          }
          if (tempRoot) tempRoot = tempRoot.right
        }
      }
    }
  }
  const rootNode = Math.floor(nums.length / 2)
  binarySearchTree(nums[rootNode])
  nums.forEach((val) => {
    if (nums[rootNode] !== val) {
      binarySearchTree(val)
    }
  })
  console.log(root)
}

// sortedArrayToBST([-10, -3, 0, 5, 9])
console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]))
