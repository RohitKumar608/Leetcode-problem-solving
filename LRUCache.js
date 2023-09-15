// https://leetcode.com/problems/lru-cache

/**
 * @param {number} capacity
` */

class Node {
  constructor(key, value) {
    this.next = null
    this.val = value
    this.key = key
  }
}

var LRUCache = function (capacity) {
  this.head = null
  this.tail = null
  this.length = 0
  this.map = {}
  this.linkedListMap = {}
  this.capacity = capacity
}

LRUCache.prototype.traverseNode = function (key) {
  if (this.length == 1) {
    return
  }

  let tempHead = this.head
  let updateTem = null

  if (tempHead?.key === key) {
    updateTem = tempHead
    this.head = tempHead.next
    updateTem.next = null
  }

  while (tempHead?.next && updateTem === null) {
    if (tempHead.next?.key == key) {
      updateTem = tempHead.next
      tempHead.next = tempHead.next?.next
      updateTem.next = null
    } else {
      tempHead = tempHead?.next
    }
  }
  if (tempHead && this.tail?.key === updateTem?.key) {
    tempHead.next = updateTem
    this.tail = updateTem
  } else {
    this.tail.next = updateTem
    this.tail = updateTem
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key] !== undefined) {
    this.traverseNode(key)
  }
  return this.map[key] !== undefined ? this.map[key] : -1
}

LRUCache.prototype.insert = function (key, value) {
  const node = new Node(key, value)
  this.length++
  if (this.head == null) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const isExist = this.map[key]

  if (isExist) {
    this.traverseNode(key)
    this.map[key] = value
    return isExist || null
  }
  if (this.length >= this.capacity) {
    const deletedVal = this.head?.key
    this.head = this.head.next
    delete this.map[deletedVal]
    this.length--
    this.insert(key, value)
    this.map[key] = value
    return null
  } else {
    this.insert(key, value)
    this.map[key] = value
    return isExist || null
  }
}

var lRUCache = new LRUCache(3)
/*
,

  */
const operations = [
  'put',
  'put',
  'put',
  'put',
  'get',
  'get',
  'get',
  'get',
  'put',
  'get',
  'get',
  'get',
  'get',
  'get',
]
const data = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [4],
  [3],
  [2],
  [1],
  [5, 5],
  [1],
  [2],
  [3],
  [4],
  [5],
]
operations.forEach((op, idx) => {
  if (op === 'get') {
    console.log(lRUCache.get(data[idx][0]))
  } else {
    console.log(lRUCache.put(...data[idx]))
  }
})

console.log(lRUCache)
