/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k
  this.data = []
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.size > this.data.length) {
    this.data.unshift(value)
    return true
  }
  return false
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.size > this.data.length) {
    this.data.push(value)
    return true
  }
  return false
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.data.length > 0) {
    this.data.shift()
    return true
  }
  return false
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.data.length > 0) {
    this.data.pop()
    return true
  }
  return false
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.data.length > 0) {
    return this.data[0]
  }
  return -1
}

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.data.length > 0) {
    return this.data[this.data.length - 1]
  }
  return -1
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.data.length === 0
}

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.data.length === this.size
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
