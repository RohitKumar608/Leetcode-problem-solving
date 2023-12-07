/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }
  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }
      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

var kSmallestPairs = function (nums1, nums2, k) {
  const priorityQueue = new PriorityQueue()
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    priorityQueue.enqueue([i, 0], nums1[i] + nums2[0])
  }
  let result = []
  while (k && priorityQueue.values.length) {
    console.log('object')
    const {
      val: [i, j],
    } = priorityQueue.dequeue()

    result.push([i, j])
    k--
    if (j < nums2.length - 1) {
      priorityQueue.enqueue([i, j + 1], nums1[i] + nums2[j + 1])
    }
  }
  return result.map((val) => [nums1[val[0]], nums2[val[1]]])
}

console.log(kSmallestPairs([-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 10))
