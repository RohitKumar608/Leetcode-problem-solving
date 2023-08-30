// https://leetcode.com/problems/remove-nth-node-from-end-of-list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var removeNthFromEnd = function (head, n) {
  let length = 0
  let copyHead = head
  while (copyHead) {
    copyHead = copyHead.next
    length++
  }
  if (n === length) {
    return head.next
  }
  let currentHead = head
  while (length) {
    if (length - 1 == n) {
      currentHead.next = currentHead.next.next
      break
    } else {
      currentHead = currentHead.next
    }
    length--
  }
  return head
}

var removeNthFromEnd2 = function (head, n) {
  let length = 0
  let dummy = head
  let list = new ListNode(0)
  let helperList = list // this will be editing list

  while (dummy) {
    length++
    dummy = dummy.next
  }

  let i = 0
  while (head) {
    if (i == length - n) {
      head = head.next
    }
    helperList.next = head
    helperList = helperList.next

    if (head) {
      head = head.next
    }

    i++
  }

  return list.next
}
