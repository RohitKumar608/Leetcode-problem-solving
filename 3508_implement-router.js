class Router {
  constructor(memoryLimit) {
    this.size = memoryLimit
    this.packets = new Set()
    this.counts = new Map()
    this.queue = new Deque()
  }

  _encode(source, destination, timestamp) {
    return [source, destination, timestamp].join('_')
  }

  addPacket(source, destination, timestamp) {
    const key = this._encode(source, destination, timestamp)

    if (this.packets.has(key)) return false

    if (this.packets.size >= this.size) {
      this.forwardPacket()
    }

    this.packets.add(key)
    this.queue.pushBack([source, destination, timestamp])

    if (!this.counts.has(destination)) {
      this.counts.set(destination, [])
    }
    this.counts.get(destination).push(timestamp)

    return true
  }

  forwardPacket() {
    if (this.packets.size === 0) return []

    const [source, destination, timestamp] = this.queue.popFront()
    const key = this._encode(source, destination, timestamp)
    this.packets.delete(key)

    this.counts.get(destination).shift()

    return [source, destination, timestamp]
  }

  getCount(destination, startTime, endTime) {
    if (!this.counts.has(destination)) return 0

    const timestamps = this.counts.get(destination)
    if (timestamps.length === 0) return 0

    const lowerBound = (arr, target) => {
      let low = 0,
        high = arr.length
      while (low < high) {
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] < target) low = mid + 1
        else high = mid
      }
      return low
    }

    const upperBound = (arr, target) => {
      let low = 0,
        high = arr.length
      while (low < high) {
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] <= target) low = mid + 1
        else high = mid
      }
      return low
    }

    const left = lowerBound(timestamps, startTime)
    const right = upperBound(timestamps, endTime)

    return right - left
  }
}
