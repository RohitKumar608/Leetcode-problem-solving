// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree

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

var sortedArrayToBST = function (nums) {
  let root = null
  function binarySearchTree(value) {
    const node = new TreeNode(value)
    if (root === null) {
      root = node
    } else {
      let tempRoot = root
      while (tempRoot) {
        if (tempRoot.val > value) {
          if (tempRoot.left === null) {
            tempRoot.left = node
            break
          }
          tempRoot = tempRoot.left
        } else {
          if (tempRoot.right === null) {
            tempRoot.right = node
            break
          }
          tempRoot = tempRoot.right
        }
      }
    }
  }
  function insert(arr) {
    if (arr.length === 0) return
    const midIdx = Math.floor(arr.length / 2)
    const leftSide = arr.slice(0, midIdx)
    const rightSide = arr.slice(midIdx + 1)
    binarySearchTree(arr[midIdx])
    insert(leftSide)
    insert(rightSide)
  }
  insert(nums)
  return root
}
