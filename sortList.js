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
var sortList = function (head) {
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

function fillData(head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr)
}

const data = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
}

console.log(sortList(linkedList.head))
// console.log(sortList(data))
