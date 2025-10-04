/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.n = n
  this.allocateToMId = {}
  this.memory = new Array(n).fill(-1)
}

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let continuosFreeMemory = 0
  let startFrom = undefined
  for (let i = 0; i < this.n; i++) {
    if (this.memory[i] == -1) {
      if (startFrom == undefined) startFrom = i
      continuosFreeMemory++
      if (continuosFreeMemory === size) {
        break
      }
    } else {
      startFrom = undefined
      continuosFreeMemory = 0
    }
  }
  if (continuosFreeMemory < size) return -1
  const memoryAllocation = []
  for (let i = startFrom; i < startFrom + size; i++) {
    memoryAllocation.push(i)
    this.memory[i] = mID
  }
  this.allocateToMId[mID] = this.allocateToMId[mID]
    ? this.allocateToMId[mID].concat(memoryAllocation)
    : memoryAllocation
  return startFrom
}

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function (mID) {
  const freeMemoryForMid = this.allocateToMId[mID] || []

  for (let i = 0; i < freeMemoryForMid.length; i++) {
    this.memory[freeMemoryForMid[i]] = -1
  }
  this.allocateToMId[mID] = []
  return freeMemoryForMid.length
}

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */

let operations = [
  'Allocator',
  'allocate',
  'allocate',
  'allocate',
  'freeMemory',
  'allocate',
  'allocate',
  'allocate',
  'freeMemory',
  'allocate',
  'freeMemory',
]
let data = [
  [10],
  [1, 1],
  [1, 2],
  [1, 3],
  [2],
  [3, 4],
  [1, 1],
  [1, 1],
  [1],
  [10, 2],
  [7],
]

var obj = new Allocator(data[0][0])
const result = [null]
for (let i = 1; i < operations.length; i++) {
  if (operations[i] === 'allocate') {
    result.push(obj.allocate(...data[i]))
    console.log(structuredClone(obj), '---', data[i], i)
    console.log('----'.repeat(10))
  } else {
    result.push(obj.freeMemory(...data[i]))
    console.log(structuredClone(obj), '--free-', data[i], i)
  }
}
console.log(result)
