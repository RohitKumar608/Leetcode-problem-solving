// https://leetcode.com/problems/binary-search-tree-iterator

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
 */
// Time O(h)
class BSTIterator {
  constructor(root) {
    this.stack = []

    while (root) {
      this.stack.push(root)
      root = root.left
    }
  }

  next() {
    let node = this.stack.pop()
    let nextNode = node.right

    while (nextNode) {
      this.stack.push(nextNode)
      nextNode = nextNode.left
    }

    return node.val
  }

  hasNext() {
    return !!this.stack.length
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
