/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let tempHead = head
  while (tempHead?.next) {
    while (tempHead?.next?.val === val) {
      tempHead.next = tempHead.next?.next
    }
    tempHead = tempHead?.next
  }
  if (head === null) return head
  if (head.val === val) {
    return head.next || null
  }
  return head || null
}

// console.log(
//   removeElements(
//     {
//       val: 7,
//       next: { val: 7, next: { val: 7, next: { val: 7, next: null } } },
//     },
//     7
//   )
// )

// console.log(
//   removeElements(
//     {
//       val: 1,
//       next: {
//         val: 2,
//         next: {
//           val: 6,
//           next: {
//             val: 3,
//             next: { val: 4, next: { val: 5, next: { val: 6, next: null } } },
//           },
//         },
//       },
//     },
//     6
//   )
// )

// console.log(removeElements({ val: 1, next: { val: 2, next: null } }, 1))
// console.log(
//   removeElements({ val: 1, next: { val: 2, next: { val: 1, next: null } } }, 1)
// )
console.log(
  removeElements(
    {
      val: 1,
      next: { val: 2, next: { val: 2, next: { val: 1, next: null } } },
    },
    2
  )
)
