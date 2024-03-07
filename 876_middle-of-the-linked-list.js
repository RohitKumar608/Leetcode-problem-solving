// https://leetcode.com/problems/middle-of-the-linked-list
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

var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

console.log(
  middleNode({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  })
)

console.log(
  middleNode({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
      },
    },
  })
)
