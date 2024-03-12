/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var removeZeroSumSublists1 = function (head) {
  const dummyNode = {}
  dummyNode.next = head
  const hashMap = new Map()
  let prefixSum = 0
  hashMap.set(prefixSum, dummyNode)
  while (head) {
    prefixSum += head.val
    if (hashMap.has(prefixSum)) {
      let tempHead = hashMap.get(prefixSum).next
      let sum = prefixSum
      while (tempHead !== head) {
        sum += tempHead.val
        hashMap.delete(sum)
        tempHead = tempHead.next
      }
      hashMap.get(prefixSum).next = head?.next
    } else {
      hashMap.set(prefixSum, head)
    }
    head = head.next
  }
  return dummyNode.next
}

var removeZeroSumSublists = function (head) {
  let prefixSum = 0
  let sumMap = new Map()

  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0)
  dummy.next = head

  let current = dummy

  while (current) {
    prefixSum += current.val
    sumMap.set(prefixSum, current)
    current = current.next
  }

  prefixSum = 0
  current = dummy

  while (current) {
    prefixSum += current.val
    current.next = sumMap.get(prefixSum).next
    current = current.next
  }

  return dummy.next
}

console.log(
  removeZeroSumSublists({
    val: 1,
    next: {
      val: 2,
      next: { val: -3, next: { val: 3, next: { val: 1, next: null } } },
    },
  })
)

console.log(
  removeZeroSumSublists({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: -3, next: { val: -2, next: null } } },
    },
  })
)

console.log(
  removeZeroSumSublists({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: -3, next: { val: 4, next: null } } },
    },
  })
)

console.log(
  removeZeroSumSublists({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: { val: -4, next: { val: 1, next: { val: 5, next: null } } },
      },
    },
  })
)
