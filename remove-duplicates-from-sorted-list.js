//  https://leetcode.com/problems/remove-duplicates-from-sorted-list
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
var deleteDuplicates = function (head) {
  console.log(JSON.parse(JSON.stringify(head)))
  let current = head
  while (current?.next) {
    if (current.val === current?.next?.val) {
      current.next = current.next?.next
    } else {
      current = current.next
    }
  }
  return head
}

console.log(
  deleteDuplicates({ val: 1, next: { val: 1, next: { val: 2, next: null } } })
)

var deleteDuplicates1 = function (head) {
  if (!head) return null

  let prev = head
  let curr = head.next

  while (curr) {
    if (curr.val === prev.val) {
      prev.next = curr.next
      curr.next = null
      curr = prev.next
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return head
}
