/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  const len = grid.length

  function isInBound(r, c) {
    return Math.min(r, c) >= 0 && Math.max(r, c) < len
  }
  function preCompute() {
    const queue = []
    const minDist = {}
    for (let r = 0; r < len; r++) {
      for (let c = 0; c < len; c++) {
        if (grid[r][c]) {
          queue.push([r, c, 0])
          minDist[`${r},${c}`] = 0
        }
      }
    }
    while (queue.length) {
      const [r, c, dist] = queue.shift()
      const neigh = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ]
      for (const [r2, c2] of neigh) {
        if (isInBound(r2, c2) && minDist[`${r2},${c2}`] === undefined) {
          minDist[`${r2},${c2}`] = dist + 1
          queue.push([r2, c2, dist + 1])
        }
      }
    }
    return minDist
  }
  const minDist = preCompute()
  const maxHeap = new MaxHeap()
  maxHeap.push([minDist[`${0},${0}`], 0, 0])
  const visit = new Set()
  visit.add(`${0},${0}`)
  while (maxHeap.heap.length) {
    const [dist, r, c] = maxHeap.pop()
    if (r === len - 1 && c === len - 1) {
      return dist
    }
    const neigh = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ]
    for (const [r2, c2] of neigh) {
      if (isInBound(r2, c2) && !visit.has(`${r2},${c2}`)) {
        visit.add(`${r2},${c2}`)
        const dist2 = Math.min(dist, minDist[`${r2},${c2}`])
        maxHeap.push([dist2, r2, c2])
      }
    }
  }
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
      if (this.heap[parent][0] >= this.heap[current][0]) {
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
        this.heap[rightChild][0] > this.heap[leftChild][0]
      ) {
        maxChild = rightChild
      }

      if (
        leftChild >= this.heap.length ||
        this.heap[current][0] >= this.heap[maxChild][0]
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

console.log(
  maximumSafenessFactor([
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
  ])
)
