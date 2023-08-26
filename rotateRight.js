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
  if (k === 0) return head
  let length = 0

  let dummyHead = head
  while (dummyHead) {
    length++
    dummyHead = dummyHead.next
  }
  k = k % length
  if (length <= 1 || k === 0) return head

  let temHead = head
  let runs = length - k

  while (runs > 1) {
    temHead = temHead?.next
    runs--
  }
  const tempVal = temHead?.next
  if (temHead) temHead.next = null
  let reverse = tempVal
  while (reverse?.next) {
    reverse = reverse?.next
  }
  if (tempVal && reverse) reverse.next = head
  return tempVal
}

console.log(rotateRight(linkedList.head, 2))
