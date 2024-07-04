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

var mergeNodes = function (head) {
  let tempNode = head
  const node = new ListNode('Infinity')
  let tail = node
  let sum = 0
  while (tempNode) {
    sum += tempNode.val
    if (tempNode.val === 0 && sum > 0) {
      const newNode = new ListNode(sum)
      tail.next = newNode
      tail = newNode
      sum = 0
    }
    tempNode = tempNode.next
  }
  return node.next
}

console.log(
  mergeNodes({
    val: 0,
    next: {
      val: 3,
      next: {
        val: 1,
        next: {
          val: 0,
          next: {
            val: 4,
            next: { val: 5, next: { val: 2, next: { val: 0, next: null } } },
          },
        },
      },
    },
  })
)
