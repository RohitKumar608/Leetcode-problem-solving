// https://leetcode.com/problems/implement-stack-using-queues

class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

var MyStack = function () {
  this.head = null
  this.tail = null
  this.length = 0
  this.isInserted = true
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  const node = new Node(x)
  this.length++

  if (this.head === null || this.tail === null) {
    this.head = node
    this.tail = node
    return
  }
  let tempHead = this.head

  let prevNode = !this.isInserted ? null : this.head
  if (!this.isInserted) {
    while (tempHead) {
      const temp = tempHead
      tempHead = tempHead.next
      temp.next = null
      if (prevNode) temp.next = prevNode
      prevNode = temp
    }
  }
  this.head = prevNode
  this.isInserted = true
  this.tail.next = node
  this.tail = node
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let tempHead = this.head
  let prevNode = this.isInserted ? null : this.head

  if (this.isInserted) {
    while (tempHead) {
      const temp = tempHead
      tempHead = tempHead.next
      temp.next = null
      if (prevNode) temp.next = prevNode
      prevNode = temp
    }
  }

  const val = prevNode.val
  prevNode = prevNode.next
  this.isInserted = false
  this.length--
  this.head = prevNode
  if (this.length >= 1) {
    const temp = prevNode
    prevNode = prevNode.next

    this.tail = temp
  } else {
    this.tail = null
  }
  return val
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.isInserted) return this.head.val
  return this.tail?.val
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.length === 0
}

var myQueue = ''

const operations = [
  'MyStack',
  'push',
  'push',
  'push',
  'pop',
  'push',
  'pop',
  'pop',
  'pop',
]

const data = [[], [1], [2], [3], [], [4], [], [], []]

operations.forEach((op, idx) => {
  if (op === 'MyStack') {
    myQueue = new MyStack()
  }
  if (op === 'push') {
    myQueue.push(data[idx][0])
  }
  if (op === 'pop') {
    console.log(myQueue.pop())
  }
  if (op === 'top') {
    console.log(myQueue.top())
  }
  if (op === 'empty') {
    console.log(myQueue.empty())
  }
})
