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
var rotateRight = function (head, k) {
  let count = 0
  let dummyHead = head
  while (dummyHead) {
    count++
    dummyHead = dummyHead.next
  }
  k = k % count
  let lastNode = null
  let length = 0
  let temHead = head
  while (temHead) {
    length++
    temHead = temHead?.next
    if (length - k - 1 === 0) {
      lastNode = head
      head = head.next
      if (head.next?.next) head.next.next = null
      else head.next = null
      break
    }
  }
  let reverse = temHead
  while (temHead?.next) {
    temHead = temHead?.next
  }
  // if (temHead) temHead.next = lastNode
  console.log(lastNode)
  return reverse
}

console.log(rotateRight(linkedList.head, 4))
