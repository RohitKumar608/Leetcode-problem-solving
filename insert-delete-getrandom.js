var RandomizedSet = function () {
  this.randomizedSet = {}
  this.data = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.randomizedSet[val]) {
    return false
  }
  this.randomizedSet[val] = true
  this.data.push(val)
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.randomizedSet[val]) {
    this.randomizedSet[val] = false
    this.data = this.data.filter((currVal) => currVal !== val)
    return true
  }
  return false
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomNumber = Math.floor(Math.random() * this.data.length)
  console.log(this.data)
  return this.data[randomNumber]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet()
console.log(obj)
console.log(obj.insert(1))
console.log(obj.remove(2))
console.log(obj.insert(2))

console.log(obj.getRandom())
console.log(obj.remove(1))
console.log(obj.insert(2))
console.log(obj.getRandom())
