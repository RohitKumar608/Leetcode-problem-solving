// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var swapNodes = function (head, k) {
  let left = head
  for (let i = 0; i < k - 1; i++) {
    left = left.next
  }

  let temp = left
  let right = head
  while (temp.next) {
    temp = temp.next
    right = right.next
  }
  const tempVal = left.val
  left.val = right.val
  right.val = tempVal

  return head
}

console.log(
  swapNodes(
    {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    2
  )
)

// console.log(swapNodes({ val: 100, next: { val: 90, next: null } }, 2))
