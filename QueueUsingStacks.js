class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class MyQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const node = new Node(val)
    if (this.tail === null) {
      this.tail = node
      this.head = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }
  pop() {
    if (this.length === 0) return false
    if (this.length === 1) {
      this.tail = null
    }
    const val = this.head.val
    this.head = this.head.next
    this.length--
    return val
  }
  peek() {
    return this.head.val
  }
  empty() {
    return this.length === 0
  }
}
var myQueue = ''

const operations = ['MyQueue', 'push', 'pop', 'push', 'peek']
const data = [[], [1], [], [2], []]
operations.forEach((op, idx) => {
  if (op === 'MyQueue') {
    myQueue = new MyQueue()
  }
  if (op === 'push') {
    myQueue.push(data[idx][0])
  }
  if (op === 'pop') {
    console.log(myQueue.pop())
  }
  if (op === 'peek') {
    console.log(myQueue.peek())
  }
  if (op === 'empty') {
    console.log(myQueue.empty())
  }
})
