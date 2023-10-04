// https://leetcode.com/problems/sort-list/
/**
 * Definition for singly-linked list.
 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList1 = function (head) {
  let isunSorted = true
  const currentHead = new ListNode(9999, head)
  while (isunSorted) {
    let tempHead = currentHead
    isunSorted = false
    while (tempHead) {
      if (tempHead?.next?.val > tempHead?.next?.next?.val) {
        isunSorted = isunSorted || true
        const tempHold = tempHead?.next
        const swapNode = tempHead?.next?.next
        const swapNodeNextNode = swapNode?.next
        tempHead.next = swapNode
        tempHold.next = swapNodeNextNode
        swapNode.next = tempHold
      }
      tempHead = tempHead.next
    }
  }
  return currentHead.next
}

function getMidNode(head) {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function merge(left, right) {
  const head = new ListNode(9999)
  let tail = head
  while (left && right) {
    if (left.val < right.val) {
      tail.next = left
      left = left.next
    } else {
      tail.next = right
      right = right.next
    }
    tail = tail.next
  }
  if (left) {
    tail.next = left
  }
  if (right) {
    tail.next = right
  }

  return head.next
}

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  left = head
  let right = getMidNode(head)
  const temp = right.next
  right.next = null
  right = temp
  return merge(sortList(left), sortList(right))
}

const data = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
}

console.log(sortList(data))
