/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var reverseBetween1 = function (head, left, right) {
  let dummyHead = head
  if (left === right) {
    return head
  }

  let prevNode = null
  let isDeleted = false
  let beforeDelete = null
  let count = 1
  while (dummyHead) {
    if (count >= left && count <= right) {
      const tempHead = dummyHead
      if (beforeDelete == null) {
        beforeDelete = tempHead
      }
      dummyHead = dummyHead.next
      if (tempHead) tempHead.next = prevNode
      prevNode = tempHead
      isDeleted = true
    } else {
      if (isDeleted) {
        break
      }
      dummyHead = dummyHead.next
    }
    count++
  }
  console.log(structuredClone(dummyHead))
  let tempHead = head
  if (tempHead?.next) {
    while (tempHead?.next) {
      if (!tempHead?.next?.next && isDeleted) {
        if (beforeDelete) beforeDelete.next = dummyHead
        tempHead.next = prevNode
        break
      } else {
        tempHead = tempHead.next
      }
    }
  } else if (head.next === null) {
    if (beforeDelete) beforeDelete.next = dummyHead
    return prevNode
  }

  return head
}

var reverseBetween2 = function (head, left, right) {
  let dummyHead = head
  if (left === right) {
    return head
  }

  let prevNode = null
  let isDeleted = false
  let beforeDelete = null
  let firstHead = null
  let count = 1
  while (dummyHead) {
    if (count >= left && count <= right) {
      const tempHead = dummyHead
      if (beforeDelete == null) {
        beforeDelete = tempHead
      }
      dummyHead = dummyHead.next
      if (tempHead) tempHead.next = prevNode
      prevNode = tempHead
      isDeleted = true
    } else {
      if (isDeleted) {
        break
      }
      firstHead = dummyHead
      dummyHead = dummyHead.next
    }
    count++
  }
  if (firstHead === null && dummyHead === null) {
    return prevNode
  }
  if (firstHead === null) {
    if (beforeDelete) beforeDelete.next = dummyHead
    return prevNode
  }
  if (beforeDelete) beforeDelete.next = dummyHead
  firstHead.next = prevNode

  return head
}

const reverseBetween = function (head, left, right) {
  let temp = new ListNode(0, head)
  let prev = temp
  for (let i = 1; i < left; i++) prev = prev.next
  let curr = prev.next
  for (let i = left; i < right; i++) {
    let nextNode = curr.next
    curr.next = nextNode.next
    nextNode.next = prev.next
    prev.next = nextNode
  }
  return temp.next
}

console.log(reverseBetween(linkedList.head, 2, 4))
