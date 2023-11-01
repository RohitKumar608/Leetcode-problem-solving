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

class MedianFinder {
  //Initilize max and min heap
  constructor() {
    this.minHeap = new MinPriorityQueue() //supported by leetcode
    this.maxHeap = new MaxPriorityQueue()
  }

  addNum(num) {
    //add to min and pop the top for max to keep them in the order that we want
    this.minHeap.enqueue(num)
    this.maxHeap.enqueue(this.minHeap.dequeue().element)
    //balance them
    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.enqueue(this.maxHeap.dequeue().element)
    }
  }

  findMedian() {
    if (this.minHeap.size() > this.maxHeap.size())
      return this.minHeap.front().element
    else
      return (this.minHeap.front().element + this.maxHeap.front().element) / 2
  }
}

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
