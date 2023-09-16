// https://leetcode.com/problems/lru-cache

/**
 * @param {number} capacity
` */

class Node {
  constructor(key, value) {
    this.next = null
    this.val = value
    this.key = key
    this.prev = null
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = null
  this.tail = null
  this.capacity = capacity
  this.length = 0
  this.map = {}
}

LRUCache.prototype.print = function () {
  const array = []
  let tempHead = this.head
  while (tempHead?.val) {
    array.push(tempHead.key)
    tempHead = tempHead.next
  }
  console.log(array)
}

LRUCache.prototype.insert = function (key, value) {
  this.length++
  const node = new Node(key, value)
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
  this.map[key] = node
}
LRUCache.prototype.remove = function (head) {
  const { next, prev, key } = head
  delete this.map[key]
  // if both next and prev is null then there is only one node
  if (next === null && prev === null) {
    this.head = null
    this.tail = null
    return
  }
  //  if the previous is null then it is the first node
  if (prev === null && next) {
    this.head = next
    this.head.prev = prev
    return
  }
  //  if the next is null then it is the last node
  if (next === null && prev) {
    prev.next = next
    this.tail = prev
    return
  }
  prev.next = next
  next.prev = prev
}
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key]) {
    const value = this.map[key].val
    this.remove(this.map[key])
    this.length--
    this.insert(key, value)
    return value
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    this.remove(this.map[key])
    this.length--
  } else if (this.length >= this.capacity) {
    {
      this.remove(this.head)
    }
    this.length--
  }
  this.insert(key, value)
}

var lRUCache = new LRUCache(10)

const operations = [
  'put',
  'put',
  'put',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'put',
  'get',
  'put',
  'put',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get',
  'get',
  'put',
  'put',
  'get',
  'get',
  'get',
  'put',
  'put',
  'get',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get',
]
const data = [
  [10, 13],
  [3, 17],
  [6, 11],
  [10, 5],
  [9, 10],
  [13],
  [2, 19],
  [2],
  [3],
  [5, 25],
  [8],
  [9, 22],
  [5, 5],
  [1, 30],
  [11],
  [9, 12],
  [7],
  [5],
  [8],
  [9],
  [4, 30],
  [9, 3],
  [9],
  [10],
  [10],
  [6, 14],
  [3, 1],
  [3],
  [10, 11],
  [8],
  [2, 14],
  [1],
  [5],
  [4],
  [11, 4],
  [12, 24],
  [5, 18],
  [13],
  [7, 23],
  [8],
  [12],
  [3, 27],
  [2, 12],
  [5],
  [2, 9],
  [13, 4],
  [8, 18],
  [1, 7],
  [6],
  [9, 29],
  [8, 21],
  [5],
  [6, 30],
  [1, 12],
  [10],
  [4, 15],
  [7, 22],
  [11, 26],
  [8, 17],
  [9, 29],
  [5],
  [3, 4],
  [11, 30],
  [12],
  [4, 29],
  [3],
  [9],
  [6],
  [3, 4],
  [1],
  [10],
  [3, 29],
  [10, 28],
  [1, 20],
  [11, 13],
  [3],
  [3, 12],
  [3, 8],
  [10, 9],
  [3, 26],
  [8],
  [7],
  [5],
  [13, 17],
  [2, 27],
  [11, 15],
  [12],
  [9, 19],
  [2, 15],
  [3, 16],
  [1],
  [12, 17],
  [9, 1],
  [6, 19],
  [4],
  [5],
  [5],
  [8, 1],
  [11, 7],
  [5, 2],
  [9, 28],
  [1],
  [2, 2],
  [7, 4],
  [4, 22],
  [7, 24],
  [9, 26],
  [13, 28],
  [11, 26],
]
operations.forEach((op, idx) => {
  if (op === 'get') {
    lRUCache.get(data[idx][0])
    lRUCache.print()
  } else {
    lRUCache.put(...data[idx])
    lRUCache.print()
  }
  console.count('object')
})

console.log(lRUCache)

// var LRUCache = function (capacity) {
//   this.head = null
//   this.tail = null
//   this.length = 0
//   this.map = {}
//   this.linkedListMap = {}
//   this.capacity = capacity
// }

// LRUCache.prototype.traverseNode = function (key) {
//   if (this.length == 1) {
//     return
//   }

//   let tempHead = this.head
//   let updateTem = null

//   if (tempHead?.key === key) {
//     updateTem = tempHead
//     this.head = tempHead.next
//     updateTem.next = null
//   }

//   while (tempHead?.next && updateTem === null) {
//     if (tempHead.next?.key == key) {
//       updateTem = tempHead.next
//       tempHead.next = tempHead.next?.next
//       updateTem.next = null
//     } else {
//       tempHead = tempHead?.next
//     }
//   }
//   if (tempHead && this.tail?.key === updateTem?.key) {
//     tempHead.next = updateTem
//     this.tail = updateTem
//   } else {
//     this.tail.next = updateTem
//     this.tail = updateTem
//   }
// }

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//   if (this.map[key] !== undefined) {
//     this.traverseNode(key)
//   }
//   return this.map[key] !== undefined ? this.map[key] : -1
// }

// LRUCache.prototype.insert = function (key, value) {
//   const node = new Node(key, value)
//   this.length++
//   if (this.head == null) {
//     this.head = node
//     this.tail = node
//   } else {
//     this.tail.next = node
//     this.tail = node
//   }
// }

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   const isExist = this.map[key]

//   if (isExist) {
//     this.traverseNode(key)
//     this.map[key] = value
//     return isExist || null
//   }
//   if (this.length >= this.capacity) {
//     const deletedVal = this.head?.key
//     this.head = this.head.next
//     delete this.map[deletedVal]
//     this.length--
//     this.insert(key, value)
//     this.map[key] = value
//     return null
//   } else {
//     this.insert(key, value)
//     this.map[key] = value
//     return isExist || null
//   }
// }
