// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//     this.prev = null
//   }
// }

// class MyQueue {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }
//   push(val) {
//     const node = new Node(val)
//     if (this.tail === null) {
//       this.tail = node
//       this.head = node
//     } else {
//       node.prev = this.tail
//       this.tail.next = node
//       this.tail = node
//     }
//     this.length++
//   }
//   pop() {
//     if (this.length === 0) return false
//     if (this.length === 1) {
//       this.tail = null
//     }
//     const val = this.head.val
//     this.head = this.head.next
//     this.length--
//     return val
//   }
//   peek() {
//     return this.head.val
//   }
//   empty() {
//     return this.length === 0
//   }
// }

class MyQueue {
  constructor() {
    this.pushStack = []
    this.popStack = []
    this.isPushed = true
    this.length = 0
  }
  push(val) {
    if (!this.isPushed) {
      while (this.popStack.length) {
        this.pushStack.push(this.popStack.pop())
      }
    }
    this.pushStack.push(val)
    this.isPushed = true
    this.length++
  }
  pop() {
    if (this.isPushed) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    this.length--
    this.isPushed = false
    return this.popStack.pop()
  }
  empty() {
    return this.length === 0
  }
  peek() {
    if (this.popStack.length) return this.popStack[this.length - 1]
    if (this.pushStack.length) return this.pushStack[0]
  }
}
var myQueue = ''

const operations = ['MyQueue', 'push', 'push', 'peek', 'pop', 'empty']
const data = [[], [1], [2], [], [], []]
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
