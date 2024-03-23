/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let tempHead = node
  let previousNode = null
  while (tempHead?.next) {
    tempHead.val = tempHead.next.val
    previousNode = tempHead
    tempHead = tempHead.next
  }
  previousNode.next = null
}

console.log(
  deleteNode({ val: 5, next: { val: 1, next: { val: 9, next: null } } })
)
