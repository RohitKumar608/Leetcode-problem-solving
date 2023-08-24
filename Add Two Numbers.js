// https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0
  this.head = null
  this.tail = null

  while (l1?.val !== undefined || l2?.val !== undefined) {
    const val = (l1?.val ? l1.val : 0) + (l2?.val ? l2.val : 0) + carry
    const node = new ListNode(val % 10)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    carry = Math.floor(val / 10)

    l1 = l1?.next
    l2 = l2?.next
  }
  if (carry) {
    const node = new ListNode(carry)
    this.tail.next = node
    this.tail = node
  }
  return this.head
}
