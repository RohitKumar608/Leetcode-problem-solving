// https://leetcode.com/problems/merge-two-sorted-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function createNode(list1, list2) {
  let node = ''
  if (list1.val > list2.val) {
    node = new ListNode(list2.val)
    list2 = list2.next
  } else {
    node = new ListNode(list1.val)
    list1 = list1.next
  }

  return { node, list1, list2 }
}

var mergeTwoLists = function (list1, list2) {
  this.head = null
  this.tail = null

  if (list1 === null && list2 === null) {
    return this.head
  }

  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }

  var { node, list1, list2 } = createNode(list1, list2)

  this.head = node
  this.tail = node

  while (list1 && list2) {
    var { node, list1: node1, list2: node2 } = createNode(list1, list2)
    list1 = node1
    list2 = node2
    this.tail.next = node
    this.tail = node
  }
  if (list1) {
    this.tail.next = list1
  }
  if (list2) {
    this.tail.next = list2
  }

  return this.head
}
