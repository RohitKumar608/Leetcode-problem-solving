/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var modifiedList = function (nums, head) {
  const set = new Set(nums)
  const result = new ListNode('node')
  let tail = result
  while (head) {
    const tempHead = head
    head = head.next
    if (!set.has(tempHead.val)) {
      tail.next = tempHead
      tempHead.next = null
      tail = tempHead
    }
  }
  return result.next
}

var modifiedList = function (nums, head) {
  const set = new Set(nums)
  let cur = new ListNode(null, head)
  let newHead = cur

  while (cur.next) {
    if (set.has(cur.next.val)) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return newHead.next
}

console.log(
  modifiedList([1, 2, 3], {
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  })
)
console.log(
  modifiedList([1], {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 1,
        next: { val: 2, next: { val: 1, next: { val: 2, next: null } } },
      },
    },
  })
)
