var ProductOfNumbers = function () {
  this.product = []
}

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.product = []
  } else {
    if (this.product.length === 0) {
      this.product.push(num)
    } else {
      this.product.push(this.product[this.product.length - 1] * num)
    }
  }
}

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  if (k > this.product.length) {
    return 0
  }
  if (k === this.product.length) {
    return this.product[this.product.length - 1]
  }
  return (
    this.product[this.product.length - 1] /
    this.product[this.product.length - 1 - k]
  )
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

const ope = [
  'ProductOfNumbers',
  'add',
  'add',
  'add',
  'add',
  'add',
  'getProduct',
  'getProduct',
  'getProduct',
  'add',
  'getProduct',
]
const data = [[], [3], [0], [2], [5], [4], [2], [3], [4], [8], [2]]

const obj = new ProductOfNumbers()
const result = []
for (let i = 1; i < ope.length; i++) {
  if (ope[i] === 'add') {
    obj.add(data[i][0])
    result.push(null)
  } else {
    result.push(obj.getProduct(data[i][0]))
  }
}

console.log(result)
