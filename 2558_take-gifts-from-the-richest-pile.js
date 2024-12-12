/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  const priorityQueue = new MaxPriorityQueue({ priority: (x) => x })
  for (let i = 0; i < gifts.length; i++) {
    priorityQueue.enqueue(gifts[i])
  }
  for (let i = 1; i <= k; i++) {
    const value = priorityQueue.dequeue()
    const sqrt = Math.floor(Math.sqrt(value.element))
    priorityQueue.enqueue(sqrt)
  }
  return priorityQueue.toArray().reduce((a, b) => a + b.element, 0)
}
