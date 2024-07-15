/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
var createBinaryTree = function (descriptions) {
  const treeNodes = {}
  const parentNode = {}
  const childChild = {}
  for (const [root, child, isLeftChild] of descriptions) {
    if (!treeNodes[root]) {
      treeNodes[root] = new TreeNode(root)
    }
    if (!treeNodes[child]) {
      treeNodes[child] = new TreeNode(child)
    }
    if (isLeftChild) {
      treeNodes[root].left = treeNodes[child]
        ? treeNodes[child]
        : new TreeNode(child)
    } else {
      treeNodes[root].right = treeNodes[child]
        ? treeNodes[child]
        : new TreeNode(child)
    }
    parentNode[root] = true
    childChild[child] = true
    if (parentNode[child]) delete parentNode[child]
    if (childChild[root]) delete parentNode[root]
  }
  const rootEle = Object.keys(parentNode)[0]
  return treeNodes[rootEle]
}

console.log(
  createBinaryTree([
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
  ])
)
