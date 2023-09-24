// https://leetcode.com/problems/partition-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var partition1 = function (head, x) {
  const dummyNode = new ListNode(9999)
  const greaterNode = new ListNode(9999)
  this.tail = dummyNode
  this.head = dummyNode
  this.greaterHead = greaterNode
  this.greaterTail = greaterNode

  while (head) {
    if (head?.val < x) {
      const node = new ListNode(head?.val)
      this.tail.next = node
      this.tail = node
    } else {
      const node = new ListNode(head?.val)
      this.greaterTail.next = node
      this.greaterTail = node
    }
    head = head.next
  }

  this.tail.next = this.greaterHead.next

  return this.head.next
}

var partition = function (head, x) {
  const dummyNode = new ListNode(9999)
  const greaterNode = new ListNode(9999)
  this.tail = dummyNode
  this.head = dummyNode
  this.greaterHead = greaterNode
  this.greaterTail = greaterNode

  while (head) {
    if (head?.val < x) {
      let tempHead = head
      head = head.next
      tempHead.next = null
      this.tail.next = tempHead
      this.tail = tempHead
    } else {
      let tempHead = head
      head = head.next
      tempHead.next = null

      this.greaterTail.next = tempHead
      this.greaterTail = tempHead
    }
  }

  this.tail.next = this.greaterHead.next

  return this.head.next
}

console.log(partition(linkedList.head, 3))
