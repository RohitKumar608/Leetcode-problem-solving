/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const heap = new MaxHeap()

  for (let i = 0; i < heights.length; i++) {
    if (heights[i + 1] > heights[i]) {
      const diff = heights[i + 1] - heights[i]
      bricks -= diff
      heap.push(diff)
    }
    if (bricks < 0) {
      if (ladders === 0) {
        return i
      }
      ladders--
      bricks += heap.pop()
    }
  }
  return heights.length - 1
}

class MaxHeap {
  constructor() {
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  pop() {
    const max = this.heap[0]
    const last = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = last
      this.heapifyDown()
    }

    return max
  }

  heapifyUp() {
    let current = this.heap.length - 1
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)
      if (this.heap[parent] >= this.heap[current]) {
        break
      }
      ;[this.heap[parent], this.heap[current]] = [
        this.heap[current],
        this.heap[parent],
      ]
      current = parent
    }
  }

  heapifyDown() {
    let current = 0
    while (true) {
      let leftChild = 2 * current + 1
      let rightChild = 2 * current + 2
      let maxChild = leftChild

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[leftChild]
      ) {
        maxChild = rightChild
      }

      if (
        leftChild >= this.heap.length ||
        this.heap[current] >= this.heap[maxChild]
      ) {
        break
      }

      ;[this.heap[current], this.heap[maxChild]] = [
        this.heap[maxChild],
        this.heap[current],
      ]
      current = maxChild
    }
  }
}

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1))
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2))
console.log(furthestBuilding([14, 3, 19, 3], 17, 0))

console.log(furthestBuilding([17, 16, 5, 10, 10, 14, 7], 74, 6))
