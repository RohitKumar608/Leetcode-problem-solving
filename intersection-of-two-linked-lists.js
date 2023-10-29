// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA
  let nodeB = headB
  const mapSet = {}
  while (nodeA) {
    if (!mapSet[nodeA.val]) {
      mapSet[nodeA.val] = []
    }
    mapSet[nodeA.val].push(nodeA)
    nodeA = nodeA.next
  }
  while (nodeB) {
    const nodeValues = mapSet[nodeB.val]
    if (mapSet[nodeB.val]) {
      if (nodeValues.find((val) => val === nodeB)) {
        return nodeB
      }
    }
    nodeB = nodeB.next
  }
  return null
}
var getIntersectionNode1 = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let curA = headA
  let curB = headB
  while (curA !== curB) {
    curA = curA.next
    curB = curB.next
    if (curA === curB) {
      return curA
    }
    if (curA === null) {
      curA = headB
    }
    if (curB === null) {
      curB = headA
    }
  }
  return curA
}

console.log(
  getIntersectionNode(
    {
      val: 4,
      next: {
        val: 1,
        next: { val: 8, next: { val: 4, next: { val: 5, next: null } } },
      },
    },
    {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 1,
          next: { val: 8, next: { val: 4, next: { val: 5, next: null } } },
        },
      },
    }
  )
)
