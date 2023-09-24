var MyHashMap = function () {
  this.map = {}
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] !== undefined ? this.map[key] : -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key]
}

const myHashMap = new MyHashMap()

const ops = ['put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get']
const data = [[1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]

ops.forEach((op, i) => {
  if (op === 'get') {
    console.log(myHashMap.get(data[i][0]), data[i], '--get--')
  } else if (op === 'put') {
    console.log(myHashMap.put(...data[i]), data[i], '--put--')
  } else {
    console.log(
      myHashMap.remove(data[i][0]),
      data[i],
      '--remove--',
      structuredClone(myHashMap)
    )
  }
})
