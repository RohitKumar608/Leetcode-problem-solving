// https://leetcode.com/problems/lru-cache

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.array = []
  this.map = {}
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map[key] !== undefined) {
    const data = this.array.filter((val) => val !== key)
    data.push(key)
    this.array = data
  }
  return this.map[key] !== undefined ? this.map[key] : -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const isThere = this.map[key]

  if (this.array.length >= this.capacity && isThere === undefined) {
    const firstVal = this.array[0]
    this.array = this.array.filter((val) => firstVal !== val)
    delete this.map[firstVal]
    this.array.push(key)
    this.map[key] = value
    return isThere ? key : null
  } else if (isThere !== undefined) {
    const data = this.array.filter((val) => val !== key)
    data.push(key)
    alert('')
    this.array = data
    this.map[key] = value
    return isThere ? key : null
  } else {
    this.array.push(key)
    this.map[key] = value
    return isThere ? key : null
  }
}

var lRUCache = new LRUCache(2)
console.log(lRUCache.put(1, 1)) // cache is {1=1}
console.log(lRUCache.put(2, 2)) // cache is {1=1, 2=2}
console.log(lRUCache.get(1)) // return 1
console.log(lRUCache.put(3, 3)) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)) // returns -1 (not found)
console.log(lRUCache.put(4, 4)) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)) // return -1 (not found)
console.log(lRUCache.get(3)) // return 3
console.log(lRUCache.get(4)) // return 4

// const data = [[2], [2, 6], [1], [1, 5], [1, 2], [1], [2]]
// const operations = ['get', 'put', 'get', 'put', 'put', 'get', 'get']
// operations.forEach((op, idx) => {
//   if (op === 'get') {
//     console.log(lRUCache.get(data[idx][0]))
//   } else {
//     console.log(lRUCache.put(...data[idx]))
//   }
// })
