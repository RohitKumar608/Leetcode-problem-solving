var AllOne = function () {
  this.map = new Map()
  this.maxKey = ''
  this.minKey = ''
}

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  this.map.set(key, (this.map.get(key) || 0) + 1)
  let maxCount = 0
  let minCount = Infinity
  let maxKey = ''
  let minKey = ''
  for (const [key, count] of this.map) {
    if (count > maxCount) {
      maxCount = count
      maxKey = key
    }
    if (count < minCount) {
      minCount = count
      minKey = key
    }
  }
  this.maxKey = maxKey
  this.minKey = minKey
  return null
}

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  const count = this.map.get(key)
  if (count > 1) {
    this.map.set(key, count - 1)
  } else {
    this.map.delete(key)
  }
  let maxCount = 0
  let minCount = Infinity
  let maxKey = ''
  let minKey = ''
  for (const [key, count] of this.map) {
    if (count > maxCount) {
      maxCount = count
      maxKey = key
    }
    if (count < minCount) {
      minCount = count
      minKey = key
    }
  }
  this.maxKey = maxKey
  this.minKey = minKey
  return null
}

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  return this.maxKey
}

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  return this.minKey
}

var obj = new AllOne()

var operations = [
  'AllOne',
  'inc',
  'inc',
  'getMaxKey',
  'getMinKey',
  'inc',
  'getMaxKey',
  'getMinKey',
]
var data = [[], ['hello'], ['hello'], [], [], ['leet'], [], []]

var operations = [
  'AllOne',
  'inc',
  'inc',
  'inc',
  'inc',
  'inc',
  'dec',
  'dec',
  'getMaxKey',
  'getMinKey',
]

var data = [[], ['a'], ['b'], ['b'], ['b'], ['b'], ['b'], ['b'], [], []]

var operations = [
  'AllOne',
  'inc',
  'inc',
  'inc',
  'inc',
  'inc',
  'inc',
  'dec',
  'dec',
  'getMinKey',
  'dec',
  'getMaxKey',
  'getMinKey',
]

var data = [
  [],
  ['a'],
  ['b'],
  ['b'],
  ['c'],
  ['c'],
  ['c'],
  ['b'],
  ['b'],
  [],
  ['a'],
  [],
  [],
]

const result = [null]
for (let i = 1; i < operations.length; i++) {
  result[i] = obj[operations[i]](data[i][0])
  if (operations[i] == 'getMinKey' || operations[i] == 'getMaxKey') {
    console.log(structuredClone(obj))
  }
}

console.log(result)
