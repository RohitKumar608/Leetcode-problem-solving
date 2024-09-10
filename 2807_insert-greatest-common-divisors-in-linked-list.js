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

var insertGreatestCommonDivisors = function (head) {
  let tempHead = head
  while (tempHead?.next) {
    tempHead.next = new ListNode(
      gcd(tempHead.val, tempHead.next.val),
      tempHead.next
    )
    tempHead = tempHead.next.next
  }
  return head
}

var gcd = function (a, b) {
  if (!b) {
    return a
  }

  return gcd(b, a % b)
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
