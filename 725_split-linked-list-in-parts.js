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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let count = 0
  let result = []
  let tempHead = head
  while (tempHead) {
    count += 1
    tempHead = tempHead.next
  }
  const splitInto = Math.floor(count / k) === 0 ? 1 : Math.floor(count / k)
  let remainingCount = count - splitInto * k > 0 ? count - splitInto * k : 0
  tempHead = head
  while (k && tempHead) {
    let previousNode = tempHead
    result.push(tempHead)
    for (let i = 0; i < splitInto + (remainingCount > 0 ? 1 : 0); i++) {
      previousNode = tempHead
      tempHead = tempHead?.next
    }
    previousNode.next = null
    k--
    remainingCount--
  }
  result = result.concat(new Array(k).fill(tempHead))
  return result
}

console.log(
  splitListToParts(
    { val: 1, next: { val: 2, next: { val: 3, next: null } } },
    5
  )
)

console.log(
  splitListToParts(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
                next: {
                  val: 7,
                  next: {
                    val: 8,
                    next: { val: 9, next: { val: 10, next: null } },
                  },
                },
              },
            },
          },
        },
      },
    },
    3
  )
)
