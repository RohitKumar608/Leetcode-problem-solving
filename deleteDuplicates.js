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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var deleteDuplicates = function (head) {
  const mapSet = {}
  let tempHead = head
  while (tempHead) {
    mapSet[tempHead.val] = (mapSet[tempHead.val] || 0) + 1
    tempHead = tempHead.next
  }
  let copyHead = new ListNode(99999, head)
  head = copyHead
  while (copyHead) {
    if (copyHead.next && mapSet[copyHead.next.val] > 1) {
      copyHead.next = copyHead.next?.next || null
    } else {
      copyHead = copyHead?.next
    }
  }
  return head.next
}

var deleteDuplicates2 = function (head) {
  let mapSet = {}
  let copyHead = new ListNode(99999, head)
  head = copyHead
  while (copyHead) {
    if (copyHead.next?.next && copyHead.next.val === copyHead.next.next.val) {
      copyHead.next = copyHead.next.next || null
      mapSet[copyHead.next.val] = true
      while (copyHead.next.val === copyHead.val) {
        copyHead.next = copyHead.next.next || null
      }
      copyHead.next = copyHead.next.next || null
    } else if (copyHead.next && mapSet[copyHead.next.val]) {
      copyHead.next = copyHead.next.next || null
    } else {
      copyHead = copyHead.next
    }
  }
  return head.next
}

console.log(deleteDuplicates(linkedList.head))
