// https://leetcode.com/problems/find-median-from-data-stream

var MedianFinder = function () {
  this.data = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.data.length === 0) {
    this.data.push(num)
    return
  }
  let isInserted = false
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i] > num) {
      this.data.splice(i, 0, num)
      isInserted = true
      break
    }
  }
  if (!isInserted) this.data.push(num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const mid = Math.floor((this.data.length - 1) / 2)
  if (this.data.length % 2 === 0) {
    return (this.data[mid] + this.data[mid + 1]) / 2
  }
  return this.data[mid]
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var instance = new MedianFinder()

const data = [
  'MedianFinder',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
  'addNum',
  'findMedian',
]
const number = [
  [],
  [6],
  [],
  [10],
  [],
  [2],
  [],
  [6],
  [],
  [5],
  [],
  [0],
  [],
  [6],
  [],
  [3],
  [],
  [1],
  [],
  [0],
  [],
  [0],
  [],
]
data.forEach((data, idx) => {
  if (data === 'MedianFinder') {
  } else if (data === 'findMedian') {
    console.log(instance.findMedian())
  } else {
    instance.addNum(number[idx][0])
  }
})
