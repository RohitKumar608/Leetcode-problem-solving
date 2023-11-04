// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
var sortedListToBST = function (head) {
  const alreadyInserted = {}
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
  function insert(head) {
    if (head === null || alreadyInserted[head.val]) return
    if (head?.next === null) {
      binarySearchTree(head.val)
      return
    }
    let slow = head
    let fast = head.next
    let previous = null
    while (fast?.next) {
      fast = fast?.next?.next
      previous = slow
      slow = slow?.next
    }

    const temp = previous?.next || null
    const right = slow.next || null
    if (slow) slow.next = null
    if (temp) {
      binarySearchTree(temp.val)
      alreadyInserted[temp.val] = true
    }
    insert(head)
    insert(right)
  }
  insert(head)
  return root
}

console.log(
  sortedListToBST({
    val: -10,
    next: {
      val: -3,
      next: { val: 0, next: { val: 5, next: { val: 9, next: null } } },
    },
  })
)
