/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  const result = []
  let previousVal = head.val
  let minima = Infinity
  let count = 1
  while (head?.next) {
    if (
      (head.val > previousVal && head.val > head.next.val) ||
      (head.val < previousVal && head.val < head.next.val)
    ) {
      result.push(count)
      if (result.length >= 2) {
        minima = Math.min(
          minima,
          result[result.length - 1] - result[result.length - 2]
        )
      }
    }

    previousVal = head.val
    head = head.next
    count++
  }

  if (result.length <= 1) {
    return [-1, -1]
  }

  return [minima, result[result.length - 1] - result[0]]
}

console.log(
  nodesBetweenCriticalPoints({
    val: 5,
    next: {
      val: 3,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 5, next: { val: 1, next: { val: 2, next: null } } },
        },
      },
    },
  })
)

console.log(
  nodesBetweenCriticalPoints({
    val: 1,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 2,
              next: { val: 2, next: { val: 2, next: { val: 7, next: null } } },
            },
          },
        },
      },
    },
  })
)
