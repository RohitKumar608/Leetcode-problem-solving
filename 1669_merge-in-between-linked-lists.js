/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let count = 0
  let tempHead = list1
  let previous = list1
  while (tempHead?.next) {
    while (count >= a && count <= b && tempHead) {
      tempHead = tempHead.next
      count++
    }
    if (count > b) {
      break
    }
    count++
    previous = tempHead
    tempHead = tempHead.next
  }
  console.log(structuredClone(previous), list1)
  previous.next = list2
  while (list2?.next) {
    list2 = list2.next
  }
  list2.next = tempHead
  return list1
}

console.log(
  mergeInBetween(
    {
      val: 10,
      next: {
        val: 1,
        next: {
          val: 13,
          next: { val: 6, next: { val: 9, next: { val: 5, next: null } } },
        },
      },
    },
    3,
    4,
    { val: 1000000, next: { val: 1000001, next: { val: 1000002, next: null } } }
  )
)
