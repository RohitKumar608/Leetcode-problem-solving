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
var reverseEvenLengthGroups = function (head) {
  const arr = []
  let count = 1
  while (head) {
    const localArr = []
    let localCount = count
    while (localCount && head) {
      localCount--
      localArr.push(head.val)
      head = head.next
    }
    count++
    if (localArr.length % 2 === 0) {
      localArr.reverse()
    }
    arr.push(...localArr)
  }
  const linkHead = new ListNode('Infinity')
  let tail = linkHead
  for (const val of arr) {
    const node = new ListNode(val)
    tail.next = node
    tail = node
  }
  return linkHead.next
}

console.log(
  reverseEvenLengthGroups({
    val: 5,
    next: {
      val: 2,
      next: {
        val: 6,
        next: {
          val: 3,
          next: {
            val: 9,
            next: {
              val: 1,
              next: {
                val: 7,
                next: {
                  val: 3,
                  next: { val: 8, next: { val: 4, next: null } },
                },
              },
            },
          },
        },
      },
    },
  })
)

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
