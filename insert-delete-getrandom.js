var RandomizedSet = function () {
  this.randomizedSet = {}
  this.randomSetArray = []
  this.length = 0
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.randomizedSet[val] >= 0) {
    return false
  }
  this.randomizedSet[val] = this.length
  this.randomSetArray.push(val)
  this.length++
  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.randomizedSet[val] >= 0) {
    const swapVal = this.randomSetArray.pop()
    const swapToIdx = this.randomizedSet[val]
    delete this.randomizedSet[val]
    this.length--

    if (swapToIdx === this.length) {
      return true
    }
    this.randomizedSet[swapVal] = swapToIdx
    this.randomSetArray[swapToIdx] = swapVal
    return true
  }
  return false
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomNumber = Math.floor(Math.random() * this.length)
  return this.randomSetArray[randomNumber]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = new RandomizedSet()
// console.log(obj.insert(1))
// console.log(obj.remove(2))
// console.log(obj.insert(2))

// console.log(obj.getRandom())
// console.log(obj.remove(1))
// console.log(obj.insert(2))
// console.log(obj.getRandom())

console.log(obj.insert(0))
console.log(obj.remove(0))
console.log(obj.insert(-1))
console.log(obj.remove(0))
console.log(obj.getRandom())
